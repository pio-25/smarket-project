import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="page-title">Contact Us</h2>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>

      <p className="contact-text">
        Contact sellers directly via chat for custom orders.
      </p>
    </div>
  );
};

export default Contact;

