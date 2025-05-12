import React from "react";
import styles from "./Body.module.css";

// menuOpen passed as props from app.jsx and used to check if the menu is open
export default function Body({ menuOpen }) {
  return (

    // if menu is open, apply these styles if not apply these styles instead
    <div className={menuOpen ? styles.hideContent : styles.heroContainer}>

      {/* If the menu is not open display this section otherwise hide it */}
      {!menuOpen && (
        <div className={styles.background}>
          <h1>"YOUR Vision, OUR Strategy, UNSTOPPABLE Growth". </h1>

          <form className={styles.searchbar}>
            <input type="text" placeholder="Enter search terms here..."/>
            <button>Search </button>
          </form>
        </div>
      )}
    </div>
  );
}
