import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return news.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getNews((await params).slug);
  return item
    ? { title: `${item.title} | 正载科技`, description: item.summary }
    : {};
}
export default async function NewsDetail({ params }: Props) {
  const item = getNews((await params).slug);
  if (!item) notFound();
  return (
    <main className="article-page page-container">
      <Link className="text-link" href="/news">
        返回行业动态
      </Link>
      <article>
        <header>
          <p className="news-meta">
            {item.category} · {item.dateLabel}
          </p>
          <h1>{item.title}</h1>
          <p className="news-source">
            来源：{item.source} · 信息核对：2026-10-29
          </p>
        </header>
        <p className="article-summary">{item.summary}</p>
        {item.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <div className="article-source">
          原始来源：
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.source}（查看原文）
          </a>
        </div>
      </article>
      <Link className="secondary-button" href="/products">
        浏览管材产品
      </Link>
    </main>
  );
}
