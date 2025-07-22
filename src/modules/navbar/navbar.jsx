import styles from "../navbar/navbar.module.css";
import Logo from "../../assets/images/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
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
          <Link to="/empresa">Empresa</Link>
          <Link to="/estoque">Estoque</Link>
          <Link to="/localizacao">Localização</Link>
          <Link to="/financiamento">Financiamento</Link>
          <Link to="/contato">Contato</Link>
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
          <Link to="/empresa">Empresa</Link>
          <Link to="/financiamento">Financiamento</Link>
          <Link to="/contato">Contato</Link>
        </div>
      )}
    </>
  );
};
