import { Footer } from "./modules/footer/footer";
import { Navbar } from "./modules/navbar/navbar";
import { PageNotFound } from "./pages/404/404";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
