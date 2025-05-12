import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// menuOpen and setMenuOpen are passed as props from app.jsx 

export default function Navbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src="../../images/marketingIcon.png" alt="" />
        <Link to="/">
          <h3> Marketing Association NZ</h3>
        </Link>
      </div>

      {/* Menu is visible in mobile view. On click function toggles visibility of the menu */}
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <img src="../../images/menu.png" alt="menuIcon" />
      </div>

      {/* Checks to see if the menu is open, hides links when true */}
      <div className={`${styles.links} ${menuOpen ? styles.showLinks : ""}`}>
        <ul>
          <li>
            
            {/* NavLinks used to navigate to different components in the app */}
            {/* isActive callback function is being used to highlight an active navigation link */}  
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              CONTACT
            </NavLink>
          </li>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
