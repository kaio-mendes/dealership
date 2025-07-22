import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import teste from "../../assets/images/banners/teste.jpg";
import mercedes from "../../assets/images/banners/benz.jpg";

export const BannerSwiper = () => {
  const bannersImg = [
    { id: 0, img: mercedes, alt: "Mercedes" },
    { id: 1, img: teste, alt: "Teste" },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {bannersImg.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
