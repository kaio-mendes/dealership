import styles from "../footer/footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.adress}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h2>Original Multimarcar</h2>
          </div>
          <p>
            Avenida Deputado Antônio da Cunha Bueno, 1510 - Centro - SALTO
            GRANDE/SP
          </p>
        </div>

        <div className={styles.about}>
          <h2>Seminovos revisados, garantia de satisfação!</h2>
          <p>Procedência e qualidade em cada quilômetro</p>
          <h2>Telefones</h2>
          <p>(14)99281-9239</p>
          <Link to="/admin" className={styles.admin}>
            Administração
          </Link>
        </div>
      </div>
      <div className={styles.development}>
        <p>
          Desenvolvido por
          <a href="https://www.kaiomendes.com.br/"> Kaio Mendes</a>
        </p>
      </div>
    </footer>
  );
};
