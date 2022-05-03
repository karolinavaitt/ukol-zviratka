import React from "react";
import Animal from "../Animal";

const AnimalList = ({ animals, handleOnClick }) => {
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          nazev={animal.nazev}
          latinsky={animal.nazevLatinsky}
          image={animal.foto}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  );
};

export default AnimalList;
