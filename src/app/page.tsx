import Image from "next/image";
import Headline from "@/components/Headline";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content">
      <section id="hero">
        <h1>
          The Official Mark <br></br>
          of the <br></br>
          Inland Empire
        </h1>
        <div className="home-buttons">
          <Link 
            href={`/product`}
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
