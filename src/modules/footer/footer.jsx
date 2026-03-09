import styles from "../footer/footer.module.css";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.adress}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h2>Original Multimarcas</h2>
          </div>
          <p>
            Avenida Deputado Antônio da Cunha Bueno, 1510 - Centro - SALTO
            GRANDE/SP
          </p>
        </div>

        <div className={styles.about}>
          <h3>Seminovos revisados, garantia de satisfação!</h3>
          <p>Procedência e qualidade em cada quilômetro</p>
          <h3>Telefones</h3>
          <a href="tel:+5514992819239">(14) 99281-9239</a>
        </div>
      </div>
      <a
        style={{ fontSize: 10, color: "#ffd90063" }}
        href="https://originalmultimarcas.com/"
        title="Conheça o site original"
        target="_blank"
      >
        Projeto feito para fins de estudos baseado em uma empresa local
      </a>
    </footer>
  );
};
