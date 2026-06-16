import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

const products = [
  ["PTFE 斑马热缩管", "彩色条纹识别，适用于导管加工定位与区分"],
  ["PTFE 精密管材", "单腔、多腔及异形结构，支持薄壁定制"],
  ["热缩管", "稳定收缩，适合包覆、固定与工艺保护"],
  ["可撕裂管材", "导入保护与释放更顺畅，适配装配流程"],
  ["定制化服务", "尺寸、颜色、壁厚、孔腔结构按需开发"]
];

const strengths = [
  ["品质保障", "严控尺寸与表面质量"],
  ["精密制造", "最小壁厚可至 0.03mm"],
  ["快速定制", "颜色条纹与结构定制"],
  ["持续研发", "协同医疗器械创新"]
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="正载科技首页">
          <span className="brand-mark">Z</span>
          <span>
            <strong>正载科技</strong>
            <small>Zhengzai Technology</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#top">首页</a>
          <a href="#products">产品中心</a>
          <a href="#quality">质量与研发</a>
          <a href="#contact">联系我们</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/ptfe-product-hero.jpg"
          alt="正载科技 PTFE 管材产品"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">南京正载科技有限公司</p>
          <h1>PTFE 精密管材解决方案</h1>
          <p className="hero-text">
            专注 PTFE 斑马热缩管、精密管材、热缩管与可撕裂管材，为介入类医疗器械提供稳定可靠的管材与定制服务。
          </p>
          <div className="hero-icons" aria-label="核心优势">
            <span>安全可靠</span>
            <span>优质材料</span>
            <span>精密制造</span>
            <span>研发定制</span>
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">提交需求</a>
            <a className="secondary-button" href="#products">产品中心</a>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="product-grid">
          {products.map(([title, text]) => (
            <article className="product-card" key={title}>
              <div className="product-visual" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
              <a href="#contact" aria-label={`咨询${title}`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="strength-strip" id="quality">
        {strengths.map(([title, text]) => (
          <article key={title}>
            <span aria-hidden="true">＋</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact Us</p>
          <h2>获取产品与定制支持</h2>
          <p>填写需求，团队会根据规格、颜色、壁厚、孔腔结构和应用场景尽快反馈。</p>
          <dl>
            <div>
              <dt>电话</dt>
              <dd><a href="tel:15557099976">15557099976</a></dd>
            </div>
            <div>
              <dt>邮箱</dt>
              <dd><a href="mailto:sales@njzhengzai.com">sales@njzhengzai.com</a></dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
