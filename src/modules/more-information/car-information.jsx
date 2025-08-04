import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CarInformation = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/cars/${id}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        if (data) {
          setCar(data);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div
      style={{
        maxWidth: 1800,
        margin: "0 auto",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
      {loading ? (
        <img
          src="https://cdn.dribbble.com/userupload/22730368/file/original-73ce545f99408d6d690e5c76a13566db.gif"
          alt="Carregando..."
          style={{ width: "200px", marginTop: "2rem" }}
        />
      ) : notFound ? (
        <p>Nenhum carro encontrado.</p>
      ) : (
        <>
          <h1>{car?.name}</h1>
          <p>{car?.year}</p>
          <p>R$ {car?.price?.toLocaleString("pt-BR")}</p>
          <img src={car?.img} alt={car?.name} />
        </>
      )}
    </div>
  );
};
