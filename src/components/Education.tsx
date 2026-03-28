import React, { useState } from "react";
// import certificate from "../assets/images/education/certificate.png";
import diploma2024 from "../assets/images/education/diploma_2024.png";
import diploma2025 from "../assets/images/education/diploma_2025.png";

const slides = [diploma2024, diploma2025];

const Education = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="education">
      <div className="container">
        <h2>Моё образование</h2>

        <div className="education-content">
          {/* Main education list */}
          <div className="education-main-list">
            <ul>
              <li>
                Психолог-консультант в сфере сексуальных отношений,
                <br />
                профессиональная переподготовка (1194 ак.ч.), Психодемия —{" "}
                <strong>
                  я еще учусь, и консультации являются частью моего
                  профессионального становления
                </strong>
              </li>
              <li>
                Современные взгляды на вопросы гендерной и сексуальной
                вариативности (8 ак.ч.), Психодемия
              </li>
              <li>
                Онлайн-фестиваль доказательной психологии «ДокПсиФест», 2024 г.
              </li>
              <li>
                Конференция ИИСТ «Семейная психотерапия. Компетенции и
                компетентность», 2024 г.
              </li>
            </ul>
          </div>

          {/* Additional qualifications */}
          <div className="education-additional">
            <ol>
              <li>+ 3,5 года личной терапии</li>
              <li>
                + Регулярные супервизии и интервизии*, в т.ч. в рамках обучений
              </li>
              <li>+ Преднамеренная практика</li>
            </ol>
          </div>

          {/* Note at the bottom similar to help-not */}
          <div className="note">
            *Это работа с более опытным профессионалом или встречи с коллегами,
            на которых происходит обмен опытом и оказывается помощь при
            возникновении затруднений
          </div>

          {/* Photo slideshow */}
          <div className="edu-slideshow">
            <button
              className="edu-arrow edu-arrow--left"
              onClick={prev}
              aria-label="Previous"
            >
              &#8249;
            </button>
            <div className="edu-slide-track">
              <img
                key={current}
                src={slides[current]}
                alt={`Документ ${current + 1}`}
                className="edu-slide-img"
              />
            </div>
            <button
              className="edu-arrow edu-arrow--right"
              onClick={next}
              aria-label="Next"
            >
              &#8250;
            </button>
            <div className="edu-slide-counter">
              {current + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
