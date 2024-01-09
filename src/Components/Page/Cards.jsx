import React from "react";
import Styles from '../Page/Card.module.css';

const Cards = (props) => {
  return (
    <div className={Styles.card}>
      <img className="card-image" src={props.character.image} alt={props.character.name} />
      <div className={Styles.grid}>
        <div className={Styles.title}>
          <p className={Styles.name}>{props.character.name}</p>
        </div>
        <div>
          <p className={Styles.gender}>Human - {props.character.gender}</p>
        </div>
        <p className={Styles.location}>
          Location: <strong>{props.character.location.name}</strong> - 
          Dimension: {props.character.location.dimension} - 
          Population: {props.character.location.residents}
        </p>
        <p className={Styles.location}>Origin: {props.character.origin.name}</p>
      </div>
    </div>
  );
};

export default Cards;
