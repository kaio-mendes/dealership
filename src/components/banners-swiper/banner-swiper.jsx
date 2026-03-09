import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import rent_banner from "../../assets/images/banners/Rent-Banner.jpg";
import principal_banner from "../../assets/images/banners/benz.jpg";

export const BannerSwiper = () => {
  const bannersImg = [
    { id: 0, img: principal_banner, alt: "Default Banner" },
    { id: 1, img: rent_banner, alt: "Second Banner" },
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
