import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/news";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/cleanroom-research-banner.png"
          alt="洁净环境中的研发工作场景示意"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content page-container">
          <h1>
            PTFE 精密管材
            <br />
            为医疗器械而研发
          </h1>
          <p>
            从斑马热缩管到多腔管与可撕裂管材，以研发实力与品质把控，回应您的设计需求。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/products">
              探索产品
            </Link>
            <Link className="secondary-button" href="/contact">
              联系我们
            </Link>
          </div>
        </div>
      </section>
      <section className="about-section" id="quality">
        <div className="page-container about-grid">
          <div className="about-image">
            <Image
              src="/images/reference-company.png"
              alt="正载科技参考网站展示的办公建筑"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
          </div>
          <div className="about-copy">
            <h2>关于正载科技</h2>
            <p>
              南京正载科技有限公司专注于医疗器械研发与制造所需的精密管材解决方案，产品涵盖
              PTFE
              斑马热缩管、单腔及多腔管、热缩管、可撕裂管材，并提供定制化开发服务。
            </p>
            <p>
              研发驱动我们的进步，品质贯穿每一个决策。我们与客户紧密协作，将应用需求转化为可实施的管材设计，结合材料选择、结构开发、工艺优化与样品验证，关注影响器械性能与制造的每一处细节。
            </p>
            <p>
              从超薄壁到定制尺寸与条纹形式，我们持续关注尺寸精度、表面质量及批次一致性，为客户提供可靠的管材支持。
            </p>
            <div className="facility-stats">
              <div>
                <strong>十万级</strong>
                <span>净化车间</span>
              </div>
              <div>
                <strong>
                  2,000 <small>m²</small>
                </strong>
                <span>场地面积</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="engineering-section page-container">
        <div>
          <h2>为您的下一款器械而研发</h2>
          <p>
            从单腔到多腔结构，我们围绕尺寸、壁厚和条纹形式持续优化，让管材适配您的应用。
          </p>
          <ul className="strengths">
            <li>品质为先</li>
            <li>精密制造</li>
            <li>持续研发</li>
            <li>定制方案</li>
          </ul>
          <Link className="text-link" href="/contact">
            与研发团队沟通
          </Link>
        </div>
        <div className="engineering-image">
          <Image
            src="/images/ptfe-custom-engineering-ultrathin-v3.png"
            alt="单腔、多腔及超薄壁斑马管的结构示意"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="home-news page-container">
        <div className="section-title">
          <div>
            <h2>行业动态</h2>
            <p>关注医疗器械、材料与制造的发展</p>
          </div>
          <Link className="text-link" href="/news">
            全部新闻
          </Link>
        </div>
        <div className="news-preview">
          {news.map((item) => (
            <article key={item.slug}>
              <p className="news-meta">
                {item.category} · {item.dateLabel}
              </p>
              <h3>
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h3>
              <p>{item.summary}</p>
              <Link className="text-link" href={`/news/${item.slug}`}>
                阅读详情
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <div className="page-container">
          <div>
            <h2>将您的需求，转化为管材方案</h2>
            <p>提供应用场景、目标尺寸或图纸，与我们开始讨论。</p>
          </div>
          <Link className="primary-button" href="/contact">
            提交定制需求
          </Link>
        </div>
      </section>
    </main>
  );
}
