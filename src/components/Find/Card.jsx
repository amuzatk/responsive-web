import React from "react";
import styles from "./Find.module.css";

const Card = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div>
        <p>{make} </p>
      </div>
    </div>
  );
};

export default Card;
