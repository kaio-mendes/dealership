import styles from "../car-cards/car-cards.module.css";
import { NewCarData } from "./car_cards";

export const CarCards = () => {
  if (!NewCarData || NewCarData.length === 0) {
    return <p>Nenhum carro disponível.</p>;
  }

  return (
    <div className={styles.containerCards}>
      {NewCarData.map((car) => {
        const {
          id,
          model,
          description,
          img,
          ano,
          transmission_type,
          km,
          color,
          air,
          price,
        } = car;

        return (
          <div key={id ?? Math.random()} className={styles.carCard}>
            <h1>{model || "Modelo não informado"}</h1>

            <p className={styles.description}>
              {description || "Sem descrição"}
            </p>

            <img src={img || "/no-image.png"} alt={model || "Carro"} />

            <div className={styles.centerInformations}>
              <p>
                <span>Ano</span> {ano ?? "N/A"}
              </p>

              <p>
                <span>Câmbio</span> {transmission_type || "N/A"}
              </p>

              <p>
                <span>Km</span> {typeof km === "number" ? km.toFixed(2) : "N/A"}
              </p>
            </div>

            <div className={styles.center}>
              <div className={styles.otherInformations}>
                <p>
                  Cor: <span>{color || "N/A"}</span>
                </p>

                <p>
                  Ar-condicionado:{" "}
                  <span>{air === undefined ? "N/A" : air ? "Sim" : "Não"}</span>
                </p>
              </div>

              <div className={styles.price}>
                <h1>{price || "Preço sob consulta"}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
