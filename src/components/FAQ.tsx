import "../FAQ.css";
import { FAQData } from "../types";
import Accordion from "./Accordion";
import data from "../faq.json";

const FAQ = () => {
  // console.log(data);

  return (
    <section id="faq">
      <div className="container">
        <h2>FAQ</h2>
        <div>
          {data.map((item: FAQData) => (
            <Accordion key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
