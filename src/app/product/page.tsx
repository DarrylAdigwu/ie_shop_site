"use client"
import React from "react";
import { bannerImages } from "@/data/banner-images";
import { hats } from "@/data/products";
import Image from "next/image";

export default function Product(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const bannerImgs = bannerImages.map((image, index) => {
    return(
      <div className="images-container" key={image.id}>
        <Image
          src={image.src}
          alt={image.alt}
          className="banner-image"
          placeholder="blur"
          fill
        />
      </div>
    )
  });

  const allHats = hats.map((hat, index) => {
    return(
      <div className="product-container" key={hat.id}>
        <div className="product-image-container">
          <Image
            src={hat.src}
            alt={hat.alt}
            className="hat-images"
            placeholder="blur"
            fill
          />
        </div>
        <div className="product-info">
          <span className="color">
            {hat.color}
          </span>
          <span className="price">
            {hat.price}
          </span>
        </div>
      </div>
    )
  })
  return(
    <main>
      <div className="product-banner">
        {bannerImgs}
      </div>
      <h3 className="product-headline">
        Place your Pre-Order now
      </h3>
      <section className="product-section">
        {allHats}
      </section>
    </main>
  )
}