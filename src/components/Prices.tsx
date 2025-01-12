import { telegramLink } from "../constants";

const Prices = () => {
  return (
    <section id="prices">
      <div className="container">
        <h2>Мои цены</h2>
        <div className="card">
          <h3>Индивидуальная консультация</h3>
          <p>
            <strong>1600₽</strong> или <strong>15 €</strong> / 60 мин
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferer"
            className="buttonClass"
          >
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prices;
