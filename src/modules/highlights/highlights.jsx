import React from "react";
import styles from "../highlights/highlights.module.css";
import { HighlightsSwiper } from "./highlights-swiper";
import celta from "../../assets/images/highlightsCars/celta.jpeg";
import civic21 from "../../assets/images/highlightsCars/civic21.jpg";
import gol from "../../assets/images/highlightsCars/gol.png";
import nivus from "../../assets/images/highlightsCars/nivus.jpg";
import renegade from "../../assets/images/highlightsCars/renegade.png";
import tcross from "../../assets/images/highlightsCars/tcross.png";
import uno from "../../assets/images/highlightsCars/uno.jpg";
export const Highlights = () => {
  const highlightCars = [
    { id: 0, img: celta, title: "Celta 2015" },
    { id: 1, img: civic21, title: "Civic 2021" },
    { id: 2, img: gol, title: "Gol G6 2016" },
    { id: 3, img: nivus, title: "Nivus 2022" },
    { id: 4, img: renegade, title: "Renegade 2021" },
    { id: 5, img: tcross, title: "T-Cross 2023" },
    { id: 6, img: uno, title: "Uno Mille 2013" },
  ];
  return (
    <main className={styles.content}>
      <h1>Destaques:</h1>

      <div className={styles.items}>
        <HighlightsSwiper highlightCars={highlightCars} />
      </div>
    </main>
  );
};
