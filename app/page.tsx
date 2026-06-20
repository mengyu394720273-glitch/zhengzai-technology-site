import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/product-catalog";

const strengths = [["品质保障", "严控尺寸与表面质量"], ["精密制造", "最小壁厚可至 0.03mm"], ["快速定制", "颜色条纹与结构定制"], ["持续研发", "协同医疗器械创新"]];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <Image className="hero-image" src="/images/zebra-heat-shrink-hero.png" alt="正载科技 PTFE 斑马热缩管产品" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">南京正载科技有限公司</p>
          <h1>PTFE 精密管材解决方案</h1>
          <p className="hero-text">专注 PTFE 斑马热缩管、精密管材、热缩管与可撕裂管材，为介入类医疗器械提供稳定可靠的管材与定制服务。</p>
          <div className="hero-icons" aria-label="核心优势"><span>安全可靠</span><span>优质材料</span><span>精密制造</span><span>研发定制</span></div>
          <div className="hero-actions"><a className="primary-button" href="#contact">提交需求</a><a className="secondary-button" href="#products">产品中心</a></div>
        </div>
      </section>
      <section className="section products-section" id="products">
        <div className="product-grid">
          {products.map((product) => (
            <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}>
              <div className="product-photo"><Image src={product.image} alt={product.title} fill sizes="(max-width: 760px) 100vw, 20vw" /></div>
              <h2>{product.title}</h2><p>{product.shortDescription}</p><span className="card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="strength-strip" id="quality">
        {strengths.map(([title, text]) => <article key={title}><span aria-hidden="true">＋</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow">Contact Us</p><h2>获取产品与定制支持</h2><p>填写需求，团队会根据规格、颜色、壁厚、孔腔结构和应用场景尽快反馈。</p><dl><div><dt>电话</dt><dd><a href="tel:15557099976">15557099976</a></dd></div><div><dt>邮箱</dt><dd><a href="mailto:sales@njzhengzai.com">sales@njzhengzai.com</a></dd></div></dl></div>
        <ContactForm />
      </section>
    </main>
  );
}
