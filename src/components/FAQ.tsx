import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq">
      <div className="container">
        <h2>FAQ</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`title ${openIndex === 0 ? "open" : ""}`}
              onClick={() => toggleAccordion(0)}
              aria-expanded={openIndex === 0}
            >
              <h3>Как проходит консультация и работа со мной?</h3>
              <div className={`content ${openIndex === 0 ? "open" : ""}`}>
                <p>
                  С полным соблюдением конфиденциальности. <br /> А ещё с
                  построением надёжных терапевтических отношений, т.к. доверие и
                  возможность ощущать себя в безопасности – самый устойчивый
                  фундамент для получения желаемого результата от терапии.
                  <br /> <br />
                  Первая встреча – больше исследовательская, в ходе которой мы
                  знакомимся и проясняем ваши трудности, намечаем цель работы (
                  <cite>любая ситуация рассматривается многомерно</cite>). Затем
                  мы встречаемся раз в неделю/две недели, между консультациями
                  возможно выполнение домашних заданий. Моя задача – научить вас
                  справляться самостоятельно!
                  <br /> <br /> Я работаю онлайн в{" "}
                  <strong>Google Meet/Telegram/WhatsUp</strong>. <br />
                  Подробнее о нюансах работы можно прочитать в{" "}
                  <a href="#faq">информированном согласии</a>.
                </p>
              </div>
            </button>
          </div>

          <div className="accordion-item">
            <button
              className={`title ${openIndex === 1 ? "open" : ""}`}
              onClick={() => toggleAccordion(1)}
              aria-expanded={openIndex === 1}
            >
              <h3>Сколько консультаций понадобится?</h3>
              <div className={`content ${openIndex === 1 ? "open" : ""}`}>
                <p>Нет универсального ответа :) Всё зависит от:</p>
                <ul className="details">
                  <li>
                    Вашего запроса: иногда достаточно 1 консультации, чтобы
                    ответить на какие-то вопросы, а иногда требуется более
                    длительная работа (в среднем, терапия занимает от 4 до 10
                    сессий)
                  </li>
                  <li>Вашего желания продолжать</li>
                  <li>Скорости вашей индивидуальной работы</li>
                </ul>
                <cite>
                  *Вы сами выбираете продолжительность и глубину работы.
                </cite>
              </div>
            </button>
          </div>

          <div className="accordion-item">
            <button
              className={`title ${openIndex === 2 ? "open" : ""}`}
              onClick={() => toggleAccordion(2)}
              aria-expanded={openIndex === 2}
            >
              <h3>В каком подходе я работаю?</h3>
              <div className={`content ${openIndex === 2 ? "open" : ""}`}>
                <p>Эта информация пока не добавлена.</p>
              </div>
            </button>
          </div>

          <div className="accordion-item">
            <button
              className={`title ${openIndex === 3 ? "open" : ""}`}
              onClick={() => toggleAccordion(3)}
              aria-expanded={openIndex === 3}
            >
              <h3>Способы оплаты</h3>
              <div className={`content ${openIndex === 3 ? "open" : ""}`}>
                <ul className="details" style={{ marginTop: "20px" }}>
                  <li>Переводом на российскую карту в рублях</li>
                  <li>Переводом на зарубежную карту в евро</li>
                  <li>Криптовалютой (USDC / USDT)</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
