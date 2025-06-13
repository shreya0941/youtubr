import React from "react";
import styles from "./Imagecard.module.css";

const Imagecard = ({ thumbnail, title, channel }) => (
  <>
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.thumbnail} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.channel}>{channel}</p>
      </div>
    </div>
  </>
);

export default Imagecard;