import { Navbar } from "./modules/navbar/navbar";
import { Footer } from "./modules/footer/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
