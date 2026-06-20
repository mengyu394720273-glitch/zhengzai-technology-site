import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="正载科技首页">
        <span className="brand-mark">Z</span>
        <span><strong>正载科技</strong><small>Zhengzai Technology</small></span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#top">首页</Link><Link href="/#products">产品中心</Link><Link href="/#quality">质量与研发</Link><Link href="/#contact">联系我们</Link>
      </nav>
    </header>
  );
}
