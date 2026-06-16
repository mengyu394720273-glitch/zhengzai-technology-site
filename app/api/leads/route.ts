import { NextResponse } from "next/server";
import { createLead, validateLeadPayload } from "@/lib/leads";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "请求内容不是有效 JSON" }, { status: 400 });
  }

  const validation = validateLeadPayload(payload);

  if (validation.errors) {
    return NextResponse.json(
      { message: "请检查表单信息", errors: validation.errors },
      { status: 400 }
    );
  }

  try {
    const lead = await createLead(validation.data!);
    return NextResponse.json({ message: "需求已提交", lead }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "暂时无法保存，请稍后再试或直接电话联系。" },
      { status: 500 }
    );
  }
}
