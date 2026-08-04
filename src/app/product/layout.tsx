import React from "react";
import ProductHeader from "@/app/product/components/ProductHeader";
import Footer from "@/components/Footer";

export default function ProductLayout({ children }: { children: React.ReactNode}): React.JSX.Element {
  return(
    <div id="product-layout-container">
      <ProductHeader />
      <div className="layout-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}