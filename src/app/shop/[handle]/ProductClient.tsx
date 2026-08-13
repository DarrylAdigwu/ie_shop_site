"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiArrowLongLeft } from "react-icons/hi2";

type singleShopifyImageType = {
  node: {
    url: string;
    altText: string;
  }
};

export default function ProductClient({ product }: any) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const title = product.seo.title;
  const imageEdge = product.images.edges[imageIndex];
  const productImage = imageEdge.node;
  const price = product.variants.edges[0].node.price;

  const selectSizes = product.options[0].values.map((size: string, index: number) => {
    return(
      <option value={size} key={index}>
        {`Size: ${size}`}
      </option>
    )
  });

  const variantImages = product.images.edges.map((image: singleShopifyImageType, index: number) => {
    return(
      <div 
        className="variant-image-container" 
        key={index}
        onClick={() => changeMainImage(index)}
      >
        <Image 
          src={image.node.url}
          alt={image.node.altText}
          fill
          className="variant-images"
        />
      </div>
    )
  });

  function changeMainImage(index: number) {
    setImageIndex(index);
  }

  return(
    <main id="main-product-content">
      <Link
        href={"/shop"}
        className="back-to-link"
      >
        <HiArrowLongLeft className="back-to-icon"/>
        Back to shop
      </Link>

      <div className="product-container">
        <div className="product-content-card-container">
          <section className="product-info">
            <div className="product-title">
              <p>{title}</p>
            </div>
            <div className="product-price">
              <p className="price-amount">{`$${price.amount}`}</p>
            </div>
          </section>
          <div className="product-image-container">
            <Image 
              src={productImage.url}
              alt={productImage.altText}
              className="product-main-image"
              fill
            />
          </div>
          <div className="product-variant-image-grid">
            {variantImages}
          </div>
        </div>
        <div className="product-page-btns">
          <div className="sizes-container">
            <label htmlFor="select-sizes" className="sr-only">Select a size:</label>
            <select
              name="select-sizes"
              id="select-sizes" 
              className="sizes-dropdown"
              defaultValue={"Select a size:"}
            >
              <option
                value={"Select a size:"}
                disabled
              >
                Select a size: 
              </option>
              {selectSizes}
            </select>
            <IoMdArrowDropdown className="drop-arrow"/>
          </div>
          <button className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}