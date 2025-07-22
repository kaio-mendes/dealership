import { Banner } from "../modules/banners/banner";
import { Navbar } from "../modules/navbar/navbar";
import { CategoryLogos } from "../modules/category-logos/category-logos";
import { NewCars } from "../modules/new-cars/new-cars";
import { Footer } from "../modules/footer/footer";
import { ButtonComponent } from "../components/button/buttonComponent";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <Navbar />
        <Banner />
        <CategoryLogos />
        <NewCars />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <ButtonComponent
            text="Nosso estoque"
            onClick={() => navigate("/estoque")}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
