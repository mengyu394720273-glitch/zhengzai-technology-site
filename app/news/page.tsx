import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "行业动态 | 正载科技",
  description: "医疗器械质量、精密管材与设计制造行业动态。",
};
export default function NewsPage() {
  return (
    <main className="page-container news-page">
      <header className="page-heading">
        <h1>行业动态</h1>
        <p>关注微创器械、医疗材料及精密管材技术的发展。</p>
      </header>
      <div className="news-list">
        {news.toReversed().map((item) => (
          <article className="news-item" key={item.slug}>
            <Link
              className="news-image"
              href={`/news/${item.slug}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 35vw"
              />
            </Link>
            <div>
              <p className="news-meta">
                {item.category} · {item.dateLabel}
              </p>
              <h2>
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.summary}</p>
              <p className="news-source">来源：{item.source}</p>
              <Link className="text-link" href={`/news/${item.slug}`}>
                阅读详情
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
