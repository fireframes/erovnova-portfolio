import React from "react";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { telegramLink, whatsupLink } from "../constants";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contact-card">
          <h3>Связаться со мной</h3>
          <div className="contact-item">
            <Mail className="icon" />
            <a href="mailto:elizaveta.rovnova@gmail.com">
              elizaveta.rovnova@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <Phone className="icon" />
            <a href="tel:+79031812421">+7 (903) 181-24-21</a>
          </div>
          <div className="social-links">
            <p>Telegram / WhatsApp</p>
            <a
              className="tg"
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} size="2xl" />
            </a>
            <a
              className="wu"
              href={whatsupLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
