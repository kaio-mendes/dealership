import styles from "../car-cards/car-cards.module.css";

export const CarCards = () => {
  const carros = [
    {
      id: 0,
      img: "https://carro.blog.br/wp-content/uploads/2024/12/Chevrolet-Astra-Advantage-2-0-8V-2011-10-900x467.webp",
      model: "Astra Hatch",
      description: "2.0 4P ADVANTAGE FLEX",
      ano: 2009,
      flex: true,
      km: 100.12,
      doors: 4,
      color: "prata",
      transmission_type: "manual",
      air: true,
      price: "R$26.600.000",
    },
    {
      id: 1,
      img: "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/3438_1.jpg",
      model: "Fiesta Sedan",
      description: "1.6 SE Flex",
      ano: 2012,
      flex: true,
      km: 85000,
      doors: 4,
      color: "prata",
      transmission_type: "automatic",
      air: true,
      price: "R$29.000",
    },
    {
      id: 2,
      img: "https://s3.ecompletocarros.dev/images/lojas/375/veiculos/170116/veiculoInfoVeiculoImagesMobile/vehicle_image_1700928058_d41d8cd98f00b204e9800998ecf8427e.jpeg",
      model: "Civic LX",
      description: "2.0 16V Flex",
      ano: 2015,
      flex: true,
      km: 60000,
      doors: 4,
      color: "prata",
      transmission_type: "manual",
      air: true,
      price: "R$48.000",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuv41owkMbeSx5pcX1b5iOGICPd0u0iI6t9g&s",
      model: "Gol Trend",
      description: "1.0 Total Flex",
      ano: 2018,
      flex: true,
      km: 40000,
      doors: 2,
      color: "azul",
      transmission_type: "manual",
      air: false,
      price: "R$35.000",
    },
    {
      id: 4,
      img: "https://revistacarro.com.br/wp-content/uploads/2019/01/hb20-1.jpg",
      model: "HB20 Comfort",
      description: "1.6 16V Flex",
      ano: 2019,
      flex: true,
      km: 35000,
      doors: 4,
      color: "azul",
      transmission_type: "automatic",
      air: true,
      price: "R$45.000",
    },
  ];
  return (
    <div className={styles.containerCards}>
      {carros.map((car) => (
        <div key={car.id} className={styles.carCard}>
          <h1>{car.model}</h1>
          <p className={styles.description}>{car.description}</p>
          <img src={car.img} alt={car.model} />
          <div className={styles.centerInformations}>
            <p>
              <span>Ano</span> {car.ano}
            </p>
            <p>
              <span>Câmbio</span> {car.transmission_type}
            </p>
            <p>
              <span>Km</span> {car.km.toFixed(2)}
            </p>
          </div>
          <div className={styles.center}>
            <div className={styles.otherInformations}>
              <p>
                Cor: <span>{car.color}</span>
              </p>
              <p>
                Ar-condicionado: <span>{car.air ? "Sim" : "Não"}</span>
              </p>
            </div>

            <div className={styles.price}>
              <h1>{car.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
