import React, { useState } from "react";
import SideMenuButton from "./SideMenuButton";
import { ChevronDown, ChevronRight } from "lucide-react";

interface HelpProps {
  onClick?: () => void;
}

const Help: React.FC<HelpProps> = ({ onClick }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const sections = [
    {
      title: "Секс",
      items: ["Интимные отношения", "Сексуальное здоровье", "Безопасность"],
    },
    {
      title: "Отношения / Партнерство",
      items: ["Коммуникация", "Доверие", "Границы"],
    },
    {
      title: "Тело",
      items: [
        "Не чувствую себя сексуальным_ой/привлекательным_ой",
        "Секс во время беременности и после родов",
      ],
    },
    {
      title: "Практики и знания",
      items: [
        "Подбор секс-игрушек, косметики",
        "Знания об альтернативных видах секса",
        "Образовательные материалы",
      ],
    },
    {
      title: "Общее",
      items: [
        "Неуверенность в себе",
        "Самокритика",
        "Улучшить взаимодействие в семье с родственниками",
      ],
    },
  ];

  const SideMenuButtonComponent: React.FC = () => (
    <SideMenuButton
      className="side-button"
      onClick={onClick}
      text="Ограничения моей работы"
    />
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="container help">
      <div className="help-header">
        <h2>С чем я могу помочь</h2>
        <div className="help-button-desktop">
          <SideMenuButtonComponent />
        </div>
      </div>
      <ul className="help-list">
        {sections.map((section) => (
          <li key={section.title} className="help-list-item">
            <button
              onClick={() => toggleSection(section.title)}
              className={`section-button ${
                openSections[section.title] ? "active" : ""
              }`}
            >
              <span>{section.title}</span>
              {openSections[section.title] ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            <div
              className={`section-content ${
                openSections[section.title] ? "open" : ""
              }`}
              style={{
                display: openSections[section.title] ? "block" : "none",
              }}
            >
              <ul>
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="help-button-mobile">
        <SideMenuButtonComponent />
      </div>
    </div>
  );
};

export default Help;
