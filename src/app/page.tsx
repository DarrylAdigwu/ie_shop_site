import Image from "next/image";
import Headline from "@/components/Headline";
import Link from "next/link";
import whiteLogo from "~/public/images/white-ie-logo.png";

export default function Home() {
  return (
    <main className="main-hero-content">
      <section id="hero">
        <div id="hero-content-container">
          <div id="hero-logo-container">
            <Image
              src={whiteLogo}
              alt="white ie shops logo"
              id="hero-logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
          </div>
          <p id="hero-headline">
            The Official Mark
            of the
            Inland Empire
          </p>
        </div>
        <div className="home-buttons">
          <Link 
            href={`/shop`}
            id="shop-btn" 
            className="link-btn"
          >
            Shop
          </Link>
          <Link 
            href={`/contact`}
            id="contact-btn" 
            className="link-btn"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
