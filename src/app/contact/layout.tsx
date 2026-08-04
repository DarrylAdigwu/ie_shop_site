import React from "react";
import ContactHeader from "./components/ContactHeader";
import Footer from "@/components/Footer";

export default function ContactLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return(
    <div id="contact-layout-container">
      <ContactHeader />
      <div className="layout-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}