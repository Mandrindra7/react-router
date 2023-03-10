import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="contact">
        <h3>Contact Us</h3>
        <form>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
