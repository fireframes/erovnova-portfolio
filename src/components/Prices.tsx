import { telegramLink } from "../constants";

const Prices = () => {
  return (
    <section id="prices">
      <div className="container">
        <h2>Мои цены</h2>
        <div className="card">
          <h3>Индивидуальная консультация</h3>
          <p>
            <strong>2000₽</strong> или <strong>20€</strong> / 60 мин
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferer"
            className="button"
          >
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prices;
