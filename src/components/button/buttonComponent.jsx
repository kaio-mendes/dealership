import styles from "../button/buttonComponent.module.css";

export const ButtonComponent = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
