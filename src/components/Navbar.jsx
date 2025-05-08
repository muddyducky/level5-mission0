import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import styles from './Navbar.module.css'


export default function Navbar({ setMenuOpen, menuOpen}) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
      <img src="../../images/marketingIcon.png" alt="" />
      <Link to='/'><h3> Marketing Association NZ</h3></Link>
      </div>
      <div className={styles.menu} onClick={()=> setMenuOpen(!menuOpen)}>
        <img src="../../images/menuIcon.png" alt="menuIcon" />
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.showLinks : ''}`}>
        <ul>
          <li><NavLink to='/menu1' className={({ isActive }) => isActive ? styles.active : ''}>MENU 1</NavLink></li>
          <li><NavLink to='/menu2'className={({ isActive }) => isActive ? styles.active : ''}>MENU 2</NavLink></li>
          <li><NavLink  to='/menu3'className={({ isActive }) => isActive ? styles.active : ''}>MENU 3</NavLink></li>
          <Link to='/login'><button>LOGIN</button></Link>
        </ul>

        
      </div>
    
    </div>
  )
}
