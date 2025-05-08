import React from 'react'
import styles from './Hero.module.css'

export default function Hero({ menuOpen }) {
  return (
    <div className={menuOpen ? styles.hideContent : styles.heroContainer}>
      {!menuOpen && (
              <div className={styles.background}>
              <h1>"Shaping Tomorrow, One Idea at a Time." </h1>
                <form className={styles.searchbar}>
                  <input type="text" />
                  <button>Search </button>
                </form>
              </div>
      )}
    </div>
  )
}
