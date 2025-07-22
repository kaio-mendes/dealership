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
    </main>
  );
};
