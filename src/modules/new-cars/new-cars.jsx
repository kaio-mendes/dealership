import { ButtonComponent } from "../../components/button/buttonComponent";
import { CarCards } from "../../components/car-cards/car-cards";
import styles from "../new-cars/new-cars.module.css";
import { useNavigate } from "react-router-dom";
export const NewCars = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Novos carros:</h1>
        <ButtonComponent
          text="Mais carros"
          onClick={() => navigate("/estoque")}
        />
      </div>
      <div className={styles.cards}>
        <CarCards />
      </div>
    </div>
  );
};
