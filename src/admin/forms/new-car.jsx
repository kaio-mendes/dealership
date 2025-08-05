import { useContext } from "react";
import { showFormContext } from "../../context/showForm";
import styles from "./new-car.module.css";

export const NewCar = () => {
  const { toogleForm } = useContext(showFormContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={toogleForm}>
          &times;
        </button>
        <h2>Novo Carro</h2>
        <form className={styles.form}>
          <label>
            Imagem:
            <input type="file" name="img" placeholder="imagem" />
          </label>

          <label>
            Nome:
            <input type="text" name="name" required />
          </label>

          <label>
            Preço:
            <input type="number" name="price" step="0.01" min="0" required />
          </label>

          <label>
            Ano:
            <input type="number" name="year" required />
          </label>

          <label>
            Marca:
            <input type="text" name="brand" required />
          </label>

          <label>
            Câmbio:
            <input type="text" name="transmission" />
          </label>

          <label>
            Combustível:
            <input type="text" name="fuel" />
          </label>

          <label>
            KM:
            <input type="number" name="km" min="0" />
          </label>

          <label>
            Portas:
            <input type="number" name="doors" min="0" />
          </label>

          <label>
            Cor:
            <input type="text" name="color" />
          </label>

          <label>
            Descrição:
            <textarea name="description" />
          </label>

          <label>
            Observações:
            <textarea name="notes" />
          </label>

          <label>
            Destaque:
            <input type="checkbox" name="featured" />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
