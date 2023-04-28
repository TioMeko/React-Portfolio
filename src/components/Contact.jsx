const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
