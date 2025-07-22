import styles from "../navbar/navbar.module.css";
import Logo from "../../assets/images/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export const Navbar = () => {
  const navigate = useNavigate();

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
          <img src={Logo} alt="Logotipo" onClick={() => navigate("/")} />
          <div className={styles.text} onClick={() => navigate("/")}>
            <h1>ORIGINAL</h1>
            <p>multimarcas</p>
          </div>
        </div>

        <div className={styles.links}>
          <a href="/empresa">Empresa</a>
          <a href="/estoque">Estoque</a>
          <a href="/localizacao">Localização</a>
          <a href="/financiamento">Financiamento</a>
          <a href="/contato">Contato</a>
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
          <a href="/empresa">Empresa</a>
          <a href="/financiamento">Financiamento</a>
          <a href="/contato">Contato</a>
        </div>
      )}
    </>
  );
};
