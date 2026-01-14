import { FaPlus } from "react-icons/fa";
import styles from "../dashboard/dashboard.module.css";
import { showFormContext } from "../../context/showForm";
import { useContext } from "react";

export const AddCar = () => {
  const { toogleForm } = useContext(showFormContext);
  return (
    <div className={styles.add} onClick={toogleForm}>
      <FaPlus />
    </div>
  );
};
