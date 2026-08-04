"use client"
import { JSX, useActionState } from "react";
import { sendContactEmail } from "./FormActions";

export default function Contact(): JSX.Element {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
    error: null,
  })

  return(
    <div className="contact-container">
      <div className="contact-banner"></div>

      <section id="contact-form-container">
        <h2 className="contact-headline">Contact Us</h2>
        
        <form action={formAction} className="contact-form">
          <div className="name-container form-data-containers">
            <div className="first-name-container">
              <label htmlFor="contact-first-name">First Name</label>
              <input type="text" name="contact-first-name" id="contact-first-name"  placeholder="First Name" className="input"/>
            </div>
            <div className="last-name-container">
              <label htmlFor="contact-last-name">Last Name</label>
              <input type="text" name="contact-last-name" id="contact-last-name"  placeholder="Last Name" className="input"/>
            </div>
          </div>
          <div className="email-container form-data-containers">
            <label htmlFor="contact-email">Email</label>
            <input type="email" name="contact-email" id="contact-email"  placeholder="Email" className="input"/>
          </div>
          <div className="message-container form-data-containers">
            <label htmlFor="message">Leave Message</label>
            <textarea name="message" id="contact-message" placeholder="Message" ></textarea>
          </div>
        </form>
      </section>
    </div>
  )
}