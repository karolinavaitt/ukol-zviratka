import React from "react";
import "./style.css";

const AnimalDetail = ({
  nazev,
  nazevLatinsky,
  domovina,
  potrava,
  biotop,
  velikost,
  popis,
}) => {
  return (
    <div className="detail">
      <div className="detail__content">
        <div className="detail__header">
          <img className="detail__image" src="./images/slon.jpg" alt="xxx" />
          <div className="detail__title">
            <h2 className="detail__name">
              <span>{nazev}</span>
            </h2>
            <div className="detail__latin">
              <span>{nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__desc">{popis}</p>

          <div className="detail__items">
            <div className="detail__item">
              <h3>Domovina</h3>
              <p>{domovina}</p>
            </div>
            <div className="detail__item">
              <h3>Biotop</h3>
              <p>{biotop}</p>
            </div>
            <div className="detail__item">
              <h3>Potrava</h3>
              <p>{potrava}</p>
            </div>
            <div className="detail__item">
              <h3>Velikost</h3>
              <p>{velikost}</p>
            </div>
          </div>

          <div className="detail__zoo">
            <h3>Najdete v těchto ZOO</h3>
            <p>Praha, Dvůr Králové, Olomouc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
