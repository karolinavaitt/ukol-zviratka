import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setDetail(data.zvirata[0]);
      });
  }, []);

  const selectAnimal = (id) => {
    const selectedAnimal = animals.find((animal) => animal.id === id);
    setDetail(selectedAnimal);
  };
  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animals={animals} selectAnimal={selectAnimal} />
        <AnimalDetail detail={detail} />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
