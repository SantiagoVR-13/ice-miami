import ContactForm from "../../Componentes/ContactForm/ContactForm";
import "./ContactPage.scss";

function ContactPage() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-page__title-div">
          {" "}
          <h1 className="contact-page__title">
            Get in Touch for Your Dream Project
          </h1>
          <h2 className="contact-page__subtitle">
            Ready to make your dream home a reality? Contact us today to discuss
            your project. Fill out the form or reach out directly.
          </h2>
        </div>
        <div className="contact-page__image-div">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
