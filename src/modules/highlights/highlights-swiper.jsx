import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./highlights.module.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export const HighlightsSwiper = ({ highlightCars = [] }) => {
  return (
    <div className={styles.swiperContainer}>
      {highlightCars.length > 0 && (
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1250: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.swiper}
        >
          {highlightCars.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperItems}>
              <img src={item.img} alt={item.title} />
              <div className={styles.about}>
                <p>{item.title}</p>
                <Link to={`/estoque/${item.id}`}>Sobre</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
