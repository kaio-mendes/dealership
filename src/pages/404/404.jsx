import styles from "../404/404.module.css";
import imageNotFound from "../../assets/images/404.png";
export const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <main className={styles.content}>
        <h1>Página não encontrada</h1>
        <img src={imageNotFound} />
        <p>
          A página que você está tentando acessar não existe ou foi removida.
        </p>
        <a href="/" className={styles.backButton}>
          Voltar para a Home
        </a>
      </main>
    </div>
  );
};
