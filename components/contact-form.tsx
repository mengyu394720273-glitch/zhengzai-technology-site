"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const interests = [
  "PTFE 斑马热缩管",
  "PTFE 精密管材",
  "热缩管",
  "可撕裂管材",
  "定制化服务"
];

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
    errors: {}
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "正在提交...", errors: {} });

    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setState({
        status: "error",
        message: result.message ?? "提交失败，请检查信息后重试。",
        errors: result.errors ?? {}
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: "已收到您的需求，正载科技团队会尽快与您联系。",
      errors: {}
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>姓名 *</span>
          <input name="name" autoComplete="name" aria-invalid={Boolean(state.errors.name)} />
          {state.errors.name && <em>{state.errors.name}</em>}
        </label>
        <label>
          <span>公司</span>
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          <span>联系电话 *</span>
          <input name="phone" autoComplete="tel" aria-invalid={Boolean(state.errors.phone)} />
          {state.errors.phone && <em>{state.errors.phone}</em>}
        </label>
        <label>
          <span>邮箱</span>
          <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(state.errors.email)} />
          {state.errors.email && <em>{state.errors.email}</em>}
        </label>
      </div>

      <label>
        <span>关注产品或服务 *</span>
        <select name="interest" defaultValue="" aria-invalid={Boolean(state.errors.interest)}>
          <option value="" disabled>请选择</option>
          {interests.map((interest) => (
            <option value={interest} key={interest}>{interest}</option>
          ))}
        </select>
        {state.errors.interest && <em>{state.errors.interest}</em>}
      </label>

      <label>
        <span>需求说明</span>
        <textarea
          name="message"
          rows={5}
          placeholder="可填写内径、外径、壁厚、颜色条纹、收缩倍率、应用场景或样品数量。"
          aria-invalid={Boolean(state.errors.message)}
        />
        {state.errors.message && <em>{state.errors.message}</em>}
      </label>

      <button className="primary-button form-button" disabled={state.status === "submitting"} type="submit">
        {state.status === "submitting" ? "提交中" : "提交需求"}
      </button>

      <p className={`form-message ${state.status}`} role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
