import React from "react";

interface SideMenuButtonProps {
  className: string;
  onClick?: () => void;
  text: string;
}

const SideMenuButton = ({ className, onClick, text }: SideMenuButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
};

export default SideMenuButton;
