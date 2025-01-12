import SideMenuButton from "./SideMenuButton";

interface NoHelpProps {
  onClick?: () => void;
}
const NoHelp: React.FC<NoHelpProps> = ({ onClick }) => {
  return (
    <div className="container">
      {/* <h2>Ограничения моей работы</h2> */}
      <h2>Пока я не обладаю квалификацией для работы с:</h2>
      <ul>
        <li>Детьми и подростками до 18 лет</li>
        <li>Парами</li>
        <li>
          Диагностированными психическими расстройствами, расстройством пищевого
          поведения, химическими зависимостями
        </li>
        <li>Изменами, ревностью</li>
        <li>Травмой насилия</li>
        <blockquote>
          Если в ходе работы я пойму, что ваш запрос выходит за рамки моих
          компетенций – я не оставлю вас без помощи и порекомендую нужного
          специалиста для перенаправления.
        </blockquote>
        <blockquote>
          Если вам необходима поддержка и вы не знаете, к кому обратиться –
          напишите мне, чтобы мы могли подобрать вам соответствующего
          специалиста.
        </blockquote>
      </ul>
      <SideMenuButton
        className="side-button"
        onClick={onClick}
        text="С чем я могу помочь"
      />
    </div>
  );
};

export default NoHelp;
