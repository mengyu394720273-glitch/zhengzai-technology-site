import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/product-catalog";

export const productEnglishNames: Record<string, string> = {
  "zebra-heat-shrink-tubing": "PTFE Zebra Heat-Shrink Tubing",
  "ptfe-precision-tubing": "Precision PTFE Tubing",
  "heat-shrink-tubing": "Heat-Shrink Tubing",
  "peel-away-tubing": "Peel-Away Tubing",
  "custom-tubing-service": "Custom Tubing Solutions",
};

export function ProductDetail({ product }: { product: Product }) {
  const zebra = product.slug === "zebra-heat-shrink-tubing";
  return (
    <main className="product-page page-container">
      <aside className="product-sidebar">
        <h2>产品系列</h2>
        <p>PRODUCT LINE</p>
        <nav aria-label="产品分类">
          {products.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              aria-current={item.slug === product.slug ? "page" : undefined}
              scroll={false}
            >
              <strong>{item.title}</strong>
              <span>{productEnglishNames[item.slug]}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-contact">
          <p>让管材适配您的设计</p>
          <Link href={`/contact?product=${product.slug}`}>咨询定制方案</Link>
        </div>
      </aside>
      <article className="product-content" key={product.slug}>
        <div className="breadcrumb">
          <Link href="/">主页</Link>
          <span>/</span>
          <Link href="/products">产品</Link>
          <span>/</span>
          <span>{product.title}</span>
        </div>
        <header className="product-heading">
          <h1>{product.title}</h1>
          <p>{productEnglishNames[product.slug]}</p>
        </header>
        <section className="product-story">
          <div className="story-image">
            <Image
              src={product.image}
              alt={`${product.title}产品展示`}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 40vw"
            />
          </div>
          <div>
            <h2>产品用途</h2>
            <p>{product.description}</p>
            <ul>
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="product-advantages">
          <div>
            <h2>产品优势</h2>
            <p>
              {zebra
                ? "超薄壁结构有助于减少包覆后的外径增量，光滑的 PTFE 表面提供低摩擦特性。鲜明的斑马条纹增强可视辨识度，尺寸、配色及条纹形式可围绕设计需求进行开发。"
                : product.shortDescription}
            </p>
            <ul>
              {product.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="product-series">
          <h2>产品系列与定制方向</h2>
          <p>具体尺寸、公差及性能要求，以图纸、样品和工程评估结果为准。</p>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <caption className="sr-only">
                {product.title}系列与可定制项目
              </caption>
              <thead>
                <tr>
                  <th scope="col">产品系列</th>
                  <th scope="col">结构形式</th>
                  <th scope="col">适用方向</th>
                  <th scope="col">可定制项目</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.series}>
                    <th scope="row">{spec.series}</th>
                    <td>{spec.structure}</td>
                    <td>{spec.application}</td>
                    <td>{spec.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="product-enquiry">
          <div>
            <h2>从设计要求，到管材方案</h2>
            <p>与我们讨论目标尺寸、壁厚、配色、截面结构及应用需求。</p>
          </div>
          <Link
            className="primary-button"
            href={`/contact?product=${product.slug}`}
          >
            咨询此产品
          </Link>
        </section>
      </article>
    </main>
  );
}
