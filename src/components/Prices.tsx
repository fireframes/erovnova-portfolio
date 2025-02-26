import { useEffect, useState } from "react";
import { telegramLink } from "../constants";
import axios from "axios";

const Prices = () => {
  // const [rateEur, setRateEur] = useState(0);
  const rateEur = 0.0109956821;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.currencyapi.com/v3/latest?apikey=cur_live_MvXRWO7dizhUSYp2Tv0hVFoxmI1qBn9nK79QZsJ8&currencies=EUR%2CUSD&base_currency=RUB"
  //       );

  //       // const today = new Date().getDay();
  //       // if (lastFetchedDay === today)

  //       setRateEur(response.data.data.EUR.value);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log(rateEur);

  const payRub = 2000;

  const convertEur = Math.round(payRub * rateEur);

  return (
    <section id="prices">
      <div className="container">
        <h2>Мои цены</h2>
        <div className="card">
          <h3>Индивидуальная консультация</h3>
          <p>
            <strong>2000₽</strong> или <strong>{convertEur}€</strong> / 60 мин
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
