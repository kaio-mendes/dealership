import styles from "../banners/banners.module.css";
import mercedes from "../../assets/images/banners/benz.jpg";
export const Banner = () => {
  return (
    <div className={styles.banners}>
      <img src={mercedes} alt="Mercedes" />
    </div>
  );
};
