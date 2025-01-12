import React from "react";
import { useState } from "react";
import { FAQData } from "../types";

const Accordion = ({ data }: { data: FAQData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className={`title ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {data.title}
      </button>
      <div className={`content ${isOpen ? "open" : ""}`}>
        {data.content}{" "}
        {data.details && (
          <ul className={`details ${isOpen ? "open" : ""}`}>
            {data.details.map((item, index) => (
              <li key={`${data.id}-detail-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordion;
