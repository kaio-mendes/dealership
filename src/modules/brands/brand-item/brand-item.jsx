import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./brand-item.module.css";
import { ButtonComponent } from "../../../components/button/buttonComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoadingPage } from "../../../components/loading/loading";
export const BrandItem = () => {
  const [car, setCar] = useState([]);
  const { brand } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url = "http://localhost:3000/cars";
    if (brand) {
      url += `?brand=${brand}`;
    }
    axios
      .get(url)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [brand]);
  return (
    <div
      style={{
        maxWidth: 1800,
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <h1 className={styles.TittleBrand}>{brand ? brand : "Estoque"}</h1>
          {car.length <= 0 ? (
            <div className={styles.message}>
              <h2>Estoque vazio</h2>
              <Link to="/">Voltar para home</Link>
            </div>
          ) : (
            <div className={styles.container}>
              {car.map((cars) => (
                <div className={styles.cars} key={cars.id}>
                  <div className={styles.Brandimgs}>
                    <img src={cars.img} alt={cars.name} />
                  </div>
                  <h2>{cars.name}</h2>
                  <div className={styles.informations}>
                    <p>{cars.year}</p>
                    <p>R$ {cars.price.toLocaleString("pt-BR")}</p>
                  </div>
                  <ButtonComponent
                    text="Ver mais"
                    onClick={() => navigate(`/estoque/${cars.id}`)}
                  />
                </div>
              ))}
            </div>
          )}
          {brand && (
            <div className={styles.more}>
              <ButtonComponent
                text="Todos os carros"
                onClick={() => navigate("/estoque")}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
