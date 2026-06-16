import { randomUUID } from "crypto";
import { Pool } from "pg";

export type LeadInput = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  interest: string;
  message?: string;
};

export type Lead = LeadInput & {
  id: string;
  created_at: string;
};

let pool: Pool | null = null;
let tableReady: Promise<void> | null = null;

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes("sslmode=require")
        ? { rejectUnauthorized: false }
        : undefined
    });
  }

  return pool;
}

async function ensureLeadsTable() {
  if (!tableReady) {
    tableReady = getPool().query(`
      CREATE TABLE IF NOT EXISTS leads (
        id uuid PRIMARY KEY,
        name text NOT NULL,
        company text,
        phone text NOT NULL,
        email text,
        interest text NOT NULL,
        message text,
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `).then(() => undefined);
  }

  return tableReady;
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateLeadPayload(payload: unknown): {
  data?: LeadInput;
  errors?: Record<string, string>;
} {
  const body = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
  const data: LeadInput = {
    name: clean(body.name),
    company: clean(body.company),
    phone: clean(body.phone),
    email: clean(body.email),
    interest: clean(body.interest),
    message: clean(body.message)
  };

  const errors: Record<string, string> = {};

  if (!data.name) errors.name = "请输入姓名";
  if (!data.phone) errors.phone = "请输入联系电话";
  if (!data.interest) errors.interest = "请选择关注产品或服务";

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "请输入有效邮箱";
  }

  if (data.phone && !/^[+\d][\d\s-]{5,24}$/.test(data.phone)) {
    errors.phone = "请输入有效联系电话";
  }

  if (data.message && data.message.length > 1000) {
    errors.message = "留言请控制在 1000 字以内";
  }

  return Object.keys(errors).length ? { errors } : { data };
}

export async function createLead(input: LeadInput) {
  await ensureLeadsTable();

  const result = await getPool().query<{ id: string; created_at: Date }>(
    `
      INSERT INTO leads (id, name, company, phone, email, interest, message)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, created_at
    `,
    [
      randomUUID(),
      input.name,
      input.company || null,
      input.phone,
      input.email || null,
      input.interest,
      input.message || null
    ]
  );

  return {
    id: result.rows[0].id,
    createdAt: result.rows[0].created_at.toISOString()
  };
}

export async function listLeads(): Promise<Lead[]> {
  await ensureLeadsTable();

  const result = await getPool().query<Lead>(`
    SELECT id, name, company, phone, email, interest, message, created_at
    FROM leads
    ORDER BY created_at DESC
  `);

  return result.rows.map((lead) => ({
    ...lead,
    created_at: new Date(lead.created_at).toISOString()
  }));
}

function escapeCsv(value: string | undefined) {
  const text = value ?? "";
  return `"${text.replaceAll('"', '""')}"`;
}

export function leadsToCsv(leads: Lead[]) {
  const header = ["id", "name", "company", "phone", "email", "interest", "message", "created_at"];
  const rows = leads.map((lead) => [
    lead.id,
    lead.name,
    lead.company,
    lead.phone,
    lead.email,
    lead.interest,
    lead.message,
    lead.created_at
  ].map(escapeCsv).join(","));

  return [header.join(","), ...rows].join("\n");
}
