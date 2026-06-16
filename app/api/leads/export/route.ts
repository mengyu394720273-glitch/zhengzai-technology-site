import { NextResponse } from "next/server";
import { leadsToCsv, listLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

function getToken(request: Request) {
  const auth = request.headers.get("authorization") ?? "";

  if (auth.toLowerCase().startsWith("bearer ")) {
    return auth.slice(7).trim();
  }

  return request.headers.get("x-admin-token") ?? "";
}

export async function GET(request: Request) {
  const expectedToken = process.env.ADMIN_EXPORT_TOKEN;

  if (!expectedToken || getToken(request) !== expectedToken) {
    return NextResponse.json({ message: "未授权访问" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get("format") ?? "csv";
    const leads = await listLeads();

    if (format === "json") {
      return NextResponse.json({ leads });
    }

    const csv = leadsToCsv(leads);

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="zhengzai-leads.csv"`
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "导出失败" }, { status: 500 });
  }
}
