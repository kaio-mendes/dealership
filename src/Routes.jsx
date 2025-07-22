import { Footer } from "./modules/footer/footer";
import { Navbar } from "./modules/navbar/navbar";
import { PageNotFound } from "./pages/404/404";
import { Company } from "./pages/company/company";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/empresa" element={<Company />} />
        </Route>
      </Routes>
    </Router>
  );
};
