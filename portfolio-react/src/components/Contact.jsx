import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2 className="section-title">Contact Me</h2>

        <p className="contact-intro">
          Have an opportunity or a question? Feel free to
          get in touch.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message"
            required
          />

          <button className="btn" type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your form was submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
