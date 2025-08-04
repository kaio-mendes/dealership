import { PageNotFound } from "./pages/404/404";
import { Company } from "./pages/company/company";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { BrandItem } from "./modules/brands/brand-item/brand-item";
import { Stock } from "./pages/stock/stock";
import { CarInformation } from "./modules/more-information/car-information";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/estoque" element={<Stock />} />
          <Route path="/marca/:brand" element={<BrandItem />} />
          <Route path="/estoque/:id" element={<CarInformation />} />
        </Route>
      </Routes>
    </Router>
  );
};
