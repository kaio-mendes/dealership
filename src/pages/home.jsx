import { Banner } from "../modules/banners/banner";
import { CategoryLogos } from "../modules/category-logos/category-logos";
import { NewCars } from "../modules/new-cars/new-cars";
import { ButtonComponent } from "../components/button/buttonComponent";
import { useNavigate } from "react-router-dom";
import { Highlights } from "../modules/highlights/highlights";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "0 1rem" }}>
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
        <Highlights />
      </div>
    </main>
  );
};
