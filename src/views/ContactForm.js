import React, { useState } from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/f559efc0-9be9-11ec-bdf8-dd9c99f898ec"; // TODO - fill on the later step


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

      setSubmitted(true);

    }, 100);

  };


  if (submitted) {

    return (

      <>

        <h2>Thank you!</h2>

        <div>We'll be in touch soon.</div>

      </>

    );

  }


  return (
<section className="contact-form-section" id="contact">
<div className="section-header center-content"><div className="container-xs"><h2 className="mt-0 mb-0">Contact</h2></div></div>
  <div className="container">
    <form
      className="contact-form"

      action={FORM_ENDPOINT}

      onSubmit={handleSubmit}

      method="POST"

      target="_blank"

    >

      <div>

        <input className="contact-form-name" type="text" placeholder="Your name" name="name" required />

      </div>

      <div>

        <input className="contact-form-email" type="email" placeholder="Email" name="email" required />

      </div>

      <div>

        <textarea  className="contact-form-message" placeholder="Your message" name="message" required />

      </div>

      <div className="contact-form-button-div">

        <button className="button button-primary button-wide-mobile" type="submit"> Send a message </button>

      </div>

    </form>
    </div>
    </section>
  );

};


export default ContactForm;