import React from "react";
import Image from "next/image";
import { productData } from "../data/productData";
import Link from "next/link";

export default function Product(): React.JSX.Element {

  // const hats = productData.map((hat) => {
  //   return(
  //     <div key={hat.id} className="product-container">
  //       <div className="product-image-container">
  //         <Image 
  //           src={hat.src}
  //           alt={hat.alt}
  //           className="product-images"
  //           placeholder="blur"
  //           fill
  //           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //         />
  //       </div>
  //       {/* <div className="product-info-container">
  //         <h2 className="product-title">{hat.title}</h2>
  //         <p className="product-price">{hat.price}</p>
  //         <button className="add-to-cart-button">Add to Cart</button>
  //       </div> */}
  //       <button id="shopify-link" className="btn">
  //         Shop Now
  //       </button>
  //     </div>
  //   )
  // });

  return(
    <section id="product">
      <div id="product-wrapper" className="wrapper">
        <div className="product-container">
          
        </div>
        <Link 
          href="/" 
          className="btn" 
          id="shopify-link"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}