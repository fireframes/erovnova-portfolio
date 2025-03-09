import React from "react";

const Education = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Education;
