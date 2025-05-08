import { useState } from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.appContainer}>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        className={styles.nav}
      />
      <Hero menuOpen={menuOpen} className={styles.hero} />

      <div className={styles.content}>
        <Menu1 />
        <Menu2 />
        <Menu3 />
      </div>
    </div>
  );
}

export default App;
