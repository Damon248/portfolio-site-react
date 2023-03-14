import React from "react";
import "./contact.scss";

function Contact() {
  const [message, setMessage] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://swaritadvisors.com/img/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" required />
          <input
            type="text"
            placeholder="example@gmail.com"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
          <textarea placeholder="Message" rows="5" cols="30"></textarea>
          <button type="submit">Send</button>
          {message && <span>Hey, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
