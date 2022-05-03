import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [detail, setDetail] = useState(animals[0]);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setDetail(data.zvirata[0]);
      });
  }, []);

  return (
    <div className="container">
      <h1>Zvířátka v ZOO</h1>
      <AnimalList animals={animals} handleOnClick={handleOnClick} />
      <AnimalDetail detail={detail} />
    </div>
  );
};

render(<App />, document.querySelector("#app"));
