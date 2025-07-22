import { PageNotFound } from "./pages/404/404";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
