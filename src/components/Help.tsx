import SideMenuButton from "./SideMenuButton";

interface HelpProps {
  onClick?: () => void;
}

const Help: React.FC<HelpProps> = ({ onClick }) => {
  return (
    <div className="container">
      <h2>С чем я могу помочь</h2>
      <ul>
        <li>Секс</li>
        <li>Отношения / Партнерство</li>
        <li>Тело</li>
        <li>Практики и знания</li>
        <li>Общее</li>
      </ul>
      <SideMenuButton
        className="side-button"
        onClick={onClick}
        text="Ограничения моей работы"
      />
    </div>
  );
};

export default Help;
