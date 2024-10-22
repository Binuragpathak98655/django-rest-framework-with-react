import "./contact-form.css";

const ContactForm = () => {
  return (
    <main>
      <h1>Contact Form</h1>

      <div>
        <a href="/submittionData">
          <button className="contact-btn">See Data</button>
        </a>
      </div>

      <div className="contact-form">
        <div className="form-item">
          <div className="input-contact">
            <input
              className="contact-name"
              id="name"
              placeholder="Name"
              type="text"
            />

            <input
              className="contact-email"
              id="email"
              placeholder="Email"
              type="email"
            />
          </div>

          <textarea
            className="contact-message"
            id="message"
            placeholder="Message"
            rows="5 "
          />
          <button className="contact-btn">Send</button>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
