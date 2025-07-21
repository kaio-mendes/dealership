import { ButtonComponent } from "../../components/button/buttonComponent";
import { CarCards } from "../../components/car-cards/car-cards";
import styles from "../new-cars/new-cars.module.css";

export const NewCars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Novos Carros:</h1>
        <ButtonComponent text="Mais carros" />
      </div>
      <div className={styles.cards}>
        <CarCards />
      </div>
    </div>
  );
};
