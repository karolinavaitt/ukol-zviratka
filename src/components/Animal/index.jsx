import React from "react";
import "./style.css";

const Animal = ({ id, foto, nazev, nazevLatinsky, selectAnimal }) => {
  const handleOnClick = () => {
    selectAnimal(id);
  };
  return (
    <div className="animal" onClick={handleOnClick}>
      <div className="animal__image">
        <img src={foto} alt={nazev} />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{nazev}</div>
        <div className="animal__latin">{nazevLatinsky}</div>
      </div>
    </div>
  );
};

export default Animal;
