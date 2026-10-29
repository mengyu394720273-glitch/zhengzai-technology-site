"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "主页"],
  ["/products", "产品"],
  ["/contact", "联系我们"],
  ["/news", "新闻"],
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="正载科技首页">
        <span className="brand-mark">Z</span>
        <span>
          <strong>正载科技</strong>
          <small>Zhengzai Technology</small>
        </span>
      </Link>
      <nav aria-label="主导航">
        {links.map(([href, label]) => {
          const active =
            href === "/" ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              href={href}
              key={href}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
