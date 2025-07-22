import styles from "../footer/footer.module.css";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
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
      </div>
    </footer>
  );
};
