import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import axios from "axios";
import { LoadingPage } from "../../components/loading/loading";

export const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ativos, setAtivos] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((res) => {
        setCars(res.data);
        const ativosCount = res.data.filter(
          (car) => car.status === "ativo"
        ).length;
        setAtivos(ativosCount);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
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
          <LoadingPage />
        </div>
      ) : (
        <>
          <h2>Dashboard</h2>
          <div className={styles.header}>
            <div className={styles.header_item}>
              <div className={styles.label}>
                <p>vendidos</p>
              </div>
              <h1>100</h1>
            </div>
            <div className={styles.header_item}>
              <div className={styles.label}>
                <p>ativos</p>
              </div>
              <h1>{ativos}</h1>
            </div>
            <div className={styles.header_item}>
              <div className={styles.label}>
                <p>total</p>
              </div>
              <h1>{cars.length}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
