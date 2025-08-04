import styles from "../company/company.module.css";
import fachada from "../../assets/images/empresa/fachada.jpeg";
export const Company = () => {
  return (
    <main
      className={styles.container}
      style={{ maxWidth: 1800, margin: "0 auto", padding: "0 1rem" }}
    >
      <div className={styles.teste}>
        <img src={fachada} alt="empresa" />
      </div>
      <div className={styles.about}>
        <h1>Sobre nós:</h1>
        <p className={styles.dialog}>"A certeza de um bom negócio."</p>
        <p>
          Empresa encontra-se no coração da cidade de Salto Grande - SP,
          contando com mais de 1000 vendas. Atualmente sendo a melhor loja de
          veículos de procedência e qualidade da região, pronta para atender
          você e sua família.
        </p>
      </div>
    </main>
  );
};
