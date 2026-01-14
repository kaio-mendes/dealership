import { useEffect, useState } from "react";
import { Header } from "../components/table/header";
import { TableList } from "../components/table/table-list";
import axios from "axios";
import { LoadingPage } from "../../components/loading/loading";

export const Reports = () => {
  const [information, setInformations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((res) => {
        setInformations(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LoadingPage />
        </div>
      ) : information.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: 20 }}>
          Nenhum carro encontrado.
        </h3>
      ) : (
        <>
          <Header />
          <TableList information={information} />
        </>
      )}
    </div>
  );
};
