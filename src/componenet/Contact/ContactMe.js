import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";

import "./ContactMe.css";

import { BiPhone, BiEnvelopeOpen } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

import { contactInfo } from "../../assests/data";
const { serviceID, templateID, userID } = contactInfo.emailJS;
const { phone, email, location } = contactInfo.info;

const ContactMe = () => {
  const [isMessageSent, setisMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        setisMessageSent(true);
        setTimeout(() => {
          setisMessageSent(false);
        }, 2500);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <section className="contact section">
      <h2 className="section-title">contact me</h2>
      <div className="underline"></div>
      <span className="section-subtitle">get in touch</span>

      <div className="contact-container container grid">
        <div>
          <div className="contact-info">
            <BiPhone className="contact-icon" />
            <div>
              <h3 className="contact-title">call me</h3>
              <span className="contact-subtitle">{phone}</span>
            </div>
          </div>
          <div className="contact-info">
            <BiEnvelopeOpen className="contact-icon" />
            <div>
              <h3 className="contact-title">Email</h3>
              <span className="contact-subtitle">{email}</span>
            </div>
          </div>
          <div className="contact-info">
            <FiMapPin className="contact-icon" />
            <div>
              <h3 className="contact-title">Location</h3>
              <span className="contact-subtitle">{location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-inputs grid">
            <div
              className={`${
                isMessageSent ? "modal-overlay show-modal" : "modal-overlay"
              }`}
            >
              <Modal />
            </div>
            <div className="contact-content">
              <label htmlFor="name" className="contact-label">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="contact-input"
                name="name"
              />
            </div>
            <div className="contact-content">
              <label htmlFor="email" className="contact-label">
                Emial:
              </label>
              <input
                id="email"
                type="email"
                className="contact-input"
                name="email"
              />
            </div>
          </div>

          <div className="contact-content">
            <label htmlFor="message" className="contact-label">
              Message:
            </label>
            <textarea
              name="message"
              className="contact-input"
              rows="7"
              cols="0"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-flex" type="submit" value="Send">
              Send Message
              <IoSend className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
