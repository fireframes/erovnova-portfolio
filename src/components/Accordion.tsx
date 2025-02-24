import React, { useState } from "react";
import { FAQData } from "../types";

const Accordion = ({ data }: { data: FAQData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className={`title ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {data.title}
        <div className={`content ${isOpen ? "open" : ""}`}>
          <p>{data.content}</p>
          {data.details && (
            <ul className={`details ${isOpen ? "open" : ""}`}>
              {data.details.map((item, index) => (
                <li key={`${data.id}-detail-${index}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </div>
  );
};

export default Accordion;
