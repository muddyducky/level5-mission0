import { useState } from "react";
import styles from "./App.module.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Strategy from "./components/Strategy";
import Growth from "./components/Growth";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.appContainer}>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        className={styles.nav}
      />
      <Body menuOpen={menuOpen} className={styles.hero} />

      <div className={styles.content}>
        <Vision />
        <Strategy />
        <Growth />
      </div>
    </div>
  );
}

export default App;
