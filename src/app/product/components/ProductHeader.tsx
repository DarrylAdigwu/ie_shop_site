import React from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "~/public/images/white-ie-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
export default function Header(): React.JSX.Element {
  return(
    <header id="product-header-container" className="header-container">
      <div id="product-header-wrapper" className="header-wrapper">
        <FiShoppingBag id="contact-cart-icon" className="header-cart-icon"/>

        <Link href="/">
          <Image 
            id="header-logo"
            src={whiteLogo}
            alt="IE logo"
          />
        </Link>

        <a href="https://www.instagram.com/theie.shop" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-media-icon" />
        </a>
      </div>
    </header>
  )
}