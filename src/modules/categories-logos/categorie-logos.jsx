import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../categories-logos/categorie-logos.module.css";
import carBrands from "../../data/car-brands";

export const CategorieLogos = () => {
  return (
    <div className={styles.center}>
      <Swiper
        className={styles.mySwiper}
        modules={[Autoplay]}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {carBrands.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <img src={item.img} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
