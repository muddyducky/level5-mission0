import React from "react";
import styles from "./Hero.module.css";

export default function Body({ menuOpen }) {
  return (
    <div className={menuOpen ? styles.hideContent : styles.heroContainer}>
      {!menuOpen && (
        <div className={styles.background}>
          <h1>"YOUR Vision, OUR Strategy, UNSTOPPABLE Growth" </h1>

          <form className={styles.searchbar}>
            <input type="text" />
            <button>Search </button>
          </form>
        </div>
      )}
    </div>
  );
}
