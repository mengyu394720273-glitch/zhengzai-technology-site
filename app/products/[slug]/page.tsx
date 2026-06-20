import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getProduct, products } from "@/lib/product-catalog";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: `${product.title} | 正载科技`, description: product.shortDescription } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return (
    <main>
      <SiteHeader />
      <section className="product-detail-hero">
        <div className="product-detail-copy"><Link className="back-link" href="/#products">← 返回产品中心</Link><p className="eyebrow">Product Detail</p><h1>{product.title}</h1><p>{product.description}</p><div className="hero-actions"><Link className="primary-button" href="/#contact">咨询产品</Link><a className="secondary-button" href="tel:15557099976">电话联系</a></div></div>
        <div className="product-detail-image"><Image src={product.image} alt={product.title} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
      </section>
      <section className="detail-overview">
        <div><p className="eyebrow">Core Features</p><h2>产品特点</h2><ul>{product.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="eyebrow">Applications</p><h2>应用场景</h2><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
      <section className="spec-section">
        <div className="section-heading detail-heading"><p className="eyebrow">Product Series</p><h2>规格系列</h2><p>以下为常见产品方向，最终规格以图纸、样品和工程评估结果为准。</p></div>
        <div className="spec-table-wrap"><table className="spec-table"><thead><tr><th>产品系列</th><th>结构形式</th><th>建议应用</th><th>可定制项目</th></tr></thead><tbody>{product.specs.map((spec) => <tr key={spec.series}><td><strong>{spec.series}</strong></td><td>{spec.structure}</td><td>{spec.application}</td><td>{spec.options}</td></tr>)}</tbody></table></div>
      </section>
      <section className="detail-cta"><div><p className="eyebrow">Custom Support</p><h2>需要特定规格？</h2><p>提交应用场景、目标尺寸或图纸，正载科技团队将协助评估材料、结构和工艺方案。</p></div><Link className="primary-button" href="/#contact">提交定制需求</Link></section>
    </main>
  );
}
