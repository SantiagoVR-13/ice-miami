import "./ContactForm.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <>
      <div className="contact-form">
        <input className="contact-form__input" type="text" placeholder="Name" />
        <input
          className="contact-form__input"
          type="email"
          placeholder="Email"
        />
        <input
          className="contact-form__input"
          type="number"
          placeholder="Phone Number"
        />
        <input
          className="contact-form__description"
          type="text"
          placeholder="How can we help? "
        />
        <button className="contact-form__signin-button"> Let us Know!</button>
      </div>
    </>
  );
}

export default ContactForm;
