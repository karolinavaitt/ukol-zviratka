import React from "react";
import Animal from "../Animal";

const AnimalList = ({ animals, selectAnimal }) => {
 
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          nazev={animal.nazev}
          latinsky={animal.nazevLatinsky}
          foto={animal.foto}
          id={animal.id}
          selectAnimal={selectAnimal}
        />
      ))}
    </div>
  );
};

export default AnimalList;
