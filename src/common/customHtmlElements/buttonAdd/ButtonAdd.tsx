import React from "react";
import "./buttonAdd.css";

type Props = {
  handleClick: Function;
  label: String;
};

const ButtonAdd: React.FC<Props> = ({ handleClick, label }: Props) => {
  return (
    <div className="button__add__wrapper">
      <button className="button" onClick={(e) => handleClick(e)}>
        {label} <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default ButtonAdd;
