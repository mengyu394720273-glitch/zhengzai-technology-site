import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { getProduct } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "联系我们 | 正载科技",
  description: "联系南京正载科技，获取 PTFE 管材产品与研发定制支持。",
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const selectedProduct = getProduct((await searchParams).product ?? "");
  return (
    <main>
      <header className="page-heading page-container">
        <h1>联系我们</h1>
        <p>从设计讨论到样品验证，让每一个要求都有回应。</p>
      </header>
      <section className="contact-section page-container" id="contact">
        <div className="contact-copy">
          <h2>与正载团队沟通</h2>
          <p>
            无论是产品选型，还是尺寸、壁厚、颜色与截面结构的定制，我们都期待了解您的项目。
          </p>
          <dl>
            <div>
              <dt>电话</dt>
              <dd>
                <a href="tel:+8615557099976">+86 155 5709 9976</a>
              </dd>
            </div>
            <div>
              <dt>邮箱</dt>
              <dd>
                <a href="mailto:sales@njzhengzai.com">sales@njzhengzai.com</a>
              </dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>
                中国 · 南京市雨花台区联东 U 谷<br />
                <span>
                  Liandong U Valley, Yuhuatai District, Nanjing, China
                </span>
              </dd>
            </div>
          </dl>
          <p className="contact-note">
            可提供目标尺寸、图纸、应用场景和样品需求，以便团队评估。
          </p>
        </div>
        <div>
          <h2>提交您的需求</h2>
          <ContactForm initialInterest={selectedProduct?.title} />
        </div>
      </section>
    </main>
  );
}
