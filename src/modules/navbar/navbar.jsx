import styles from "../navbar/navbar.module.css";
import Logo from "../../assets/images/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowMobile(true);
    }
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logotipo" />
          <div className={styles.text}>
            <h1>ORIGINAL</h1>
            <p>multimarcas</p>
          </div>
        </div>

        <div className={styles.links}>
          <a href="#">Empresa</a>
          <a href="#">Estoque</a>
          <a href="#">Localização</a>
          <a href="#">Financiamento</a>
          <a href="#">Contato</a>
        </div>

        <div className={styles.buttons}>
          <FaMagnifyingGlass />
        </div>

        {showMobile && (
          <div className={styles.mobileMenu}>
            <IoMenu onClick={() => setToogleMenu((prev) => !prev)} />
          </div>
        )}
      </nav>

      {showMobile && toogleMenu && (
        <div className={styles.mobileLinks}>
          <a href="#">Empresa</a>
          <a href="#">Financiamento</a>
          <a href="#">Contato</a>
        </div>
      )}
    </>
  );
};
