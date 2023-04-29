import React from 'react'
import "./contactUs.css"
function ContactUs() {
  return (
    <div id="contactus" class="contanctme-form-container">
      <div class="container ">
        <h1 class="contactus-heading">Contact Me</h1>

        <h3 class="contactus-sub-heading">
          Feel free to contact me by submitting the form below and i will get
          back to you as soon as possible
        </h3>

        <div class="contactus-form-container">
          <form class="form" action="">
            <div class="formfield-container">
              <input
                class="formfield"
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
              />

              <input
                class="formfield"
                type="email"
                name="email"
                id=""
                placeholder="Enter your email address"
              />

              <input
                class="formfield"
                type="text"
                name="subject"
                id=""
                placeholder="Enter your subject"
              />

              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                class="formfield formfield-textarea"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" class="btn-pink" id="submit-btn">
                Send Message
                <a href="mailto: subrats004@gmail.com">
                  <i class="submit-icon fa-solid fa-paper-plane"></i>
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs