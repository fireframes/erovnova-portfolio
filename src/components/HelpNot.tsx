import SideMenuButton from "./SideMenuButton";

interface HelpNotProps {
  onClick?: () => void;
}

const HelpNot: React.FC<HelpNotProps> = ({ onClick }) => {
  return (
    <div className="container help">
      <div className="help-header">
        <h2>Пока я не работаю с:</h2>
        <div className="help-button-desktop">
          <SideMenuButton
            className="side-button"
            onClick={onClick}
            text="С чем я могу помочь"
          />
        </div>
      </div>

      <ul className="not-help-list">
        <li className="not-help-list-item">Детьми и подростками до 18 лет</li>
        <li className="not-help-list-item">Парами</li>
        <li className="not-help-list-item">
          Диагностированными психическими расстройствами, расстройством пищевого
          поведения, химическими зависимостями
        </li>
        <li className="not-help-list-item">Травмой насилия</li>
      </ul>

      <div className="note-container">
        <blockquote className="note">
          Если в ходе работы я пойму, что ваш запрос выходит за рамки моих
          компетенций – я не оставлю вас без помощи и порекомендую нужного
          специалиста для перенаправления.
        </blockquote>
      </div>

      <div className="help-button-mobile">
        <SideMenuButton
          className="side-button"
          onClick={onClick}
          text="С чем я могу помочь"
        />
      </div>
    </div>
  );
};

export default HelpNot;
