import { BannerSwiper } from "../../components/banners-swiper/banner-swiper";
import styles from "../banners/banners.module.css";

export const Banner = () => {
  return (
    <div className={styles.banners}>
      <BannerSwiper />
    </div>
  );
};
