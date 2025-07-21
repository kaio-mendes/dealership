import styles from "../button/buttonComponent.module.css";

export const ButtonComponent = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
