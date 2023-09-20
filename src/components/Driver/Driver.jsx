import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="" />
      </div>
      <div>
        <h2>
          {" "}
          Find your perfect car <span>to try before you buy</span>{" "}
        </h2>
        <p>
          Make sure your future wheel work well with your lifestle before taking
          your time in the driver's seat
        </p>
        <button>Browse Cars</button>
      </div>
      {/* <button>Browse Cars</button> */}

    </div>
  );
};

export default Driver;
