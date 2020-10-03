import React from "react";
import "./index.scss";

const Button = ({ text, onClickHandler, selected }) => {
  return (
    <div className="buttonWrapper">
      <input
        type="button"
        className={selected ? `button active` : "button"}
        value={text}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Button;
