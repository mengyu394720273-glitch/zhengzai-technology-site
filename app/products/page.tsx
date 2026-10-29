import type { Metadata } from "next";
import { ProductDetail } from "@/components/product-detail";
import { products } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "产品中心 | 正载科技",
  description: "PTFE 斑马热缩管、精密管材、热缩管、可撕裂管材及管材定制方案。",
};
export default function ProductsPage() {
  return <ProductDetail product={products[0]} />;
}
