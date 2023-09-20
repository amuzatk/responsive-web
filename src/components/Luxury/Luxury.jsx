import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span> Select from the top luxury vehicles to roll in styles</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDQyMTU5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt=""
            // style={{width:'100%'}}
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDQyMTU5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt=""
            // style={{width:'100%'}}
          />
          <div className={styles.content}>
            <h3>Rolls Royce2</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDQyMTU5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt=""
            // style={{width:'100%'}}
          />
          <div className={styles.content}>
            <h3>Rolls Royce3</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDQyMTU5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt=""
            // style={{width:'100%'}}
          />
          <div className={styles.content}>
            <h3>Rolls Royce4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
