import React from "react";
import styles from "./Body.module.css";

//___menuOpen passed as props from app.jsx and used to check if the menu is open___
export default function Body({ menuOpen }) {
  return (

    //___hides the menu icon until screen size reduces.___ 
    <div className={menuOpen ? styles.hideContent : ""}>

      {/* ___If the menu is not open display this section otherwise hide it__ */}
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
