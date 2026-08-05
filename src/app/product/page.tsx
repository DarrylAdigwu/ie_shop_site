"use client"
import {JSX, useState, useEffect} from "react";
import { bannerImages } from "@/data/banner-images";
import { hats } from "@/data/products";
import Image from "next/image";
import BannerCarousel from "./components/BannerCarousel";

export default function Product(): JSX.Element {


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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <BannerCarousel autoSlide={4000}/>
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