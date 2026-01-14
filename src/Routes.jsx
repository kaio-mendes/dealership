import { PageNotFound } from "./pages/404/404";
import { Company } from "./pages/company/company";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLayout, Layout } from "./Layout";
import { BrandItem } from "./modules/brands/brand-item/brand-item";
import { Stock } from "./pages/stock/stock";
import { CarInformation } from "./modules/more-information/car-information";
import { AdminLogin } from "./admin/login/admin-login";
import { Dashboard } from "./admin/dashboard/dashboard";
import { Reports } from "./admin/reports/reports";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/estoque" element={<Stock />} />
          <Route path="/estoque/:brand" element={<BrandItem />} />
          <Route path="/estoque/:id" element={<CarInformation />} />
        </Route>
        <Route path="/admin" element={<AdminLogin />} />

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
};
