import "./App.css";
import { Banner } from "./modules/banners/banner";
import { Navbar } from "./modules/navbar/navbar";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CategorieLogos } from "./modules/categories-logos/categorie-logos";
import { NewCars } from "./modules/new-cars/new-cars";
import { Footer } from "./modules/footer/footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <CategorieLogos />
        <NewCars />
      </div>
      <Footer />
    </>
  );
}

export default App;
