import React from "react";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-grid">
          {/* Contact Information */}
          <div className="contact-card">
            <h3>Связаться со мной</h3>
            <div className="contact-item">
              <Mail className="icon" />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <a href="tel:+1234567890">+7 (XXX) XXX-XX-XX</a>
            </div>
            <div className="social-links">
              {/* Add your social media links */}
              <p>Telegram / WhatsApp</p>
            </div>
          </div>

          {/* Location Information */}
          <div className="contact-card">
            <h3>Локация</h3>
            <div className="contact-item">
              <MapPin className="icon" />
              <p>Город, Адрес</p>
            </div>
            <div className="location-details">
              <p>Возможны как очные, так и онлайн-консультации</p>
            </div>
          </div>

          {/* Schedule Information */}
          <div className="contact-card">
            <h3>График работы</h3>
            <div className="contact-item">
              <Calendar className="icon" />
              <p>Пн - Пт</p>
            </div>
            <div className="contact-item">
              <Clock className="icon" />
              <p>10:00 - 19:00</p>
            </div>
            <p className="schedule-note">
              Запись на консультацию по предварительной договоренности
            </p>
          </div>

          {/* Contact Form or Additional Info */}
          <div className="contact-card">
            <h3>Записаться на консультацию</h3>
            <p>Чтобы записаться на консультацию:</p>
            <ol>
              <li>Напишите мне на почту или в мессенджеры</li>
              <li>Укажите удобное для вас время</li>
              <li>Кратко опишите причину обращения</li>
            </ol>
            <p className="response-time">
              Я отвечаю на сообщения в течение 24 часов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
