import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>南京正载科技有限公司</strong>
          <p>Nanjing Zhengzai Technology Co., Ltd.</p>
          <p>研发驱动 · 品质为先</p>
        </div>
        <div>
          <a href="tel:+8615557099976">+86 155 5709 9976</a>
          <a href="mailto:sales@njzhengzai.com">sales@njzhengzai.com</a>
          <p>南京市雨花台区联东 U 谷</p>
        </div>
        <div className="footer-links">
          <Link href="/products">产品中心</Link>
          <Link href="/contact">联系团队</Link>
          <Link href="/news">行业动态</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} 南京正载科技有限公司
      </div>
    </footer>
  );
}
