import { Navbar } from "./modules/navbar/navbar";
import { Footer } from "./modules/footer/footer";
import { Outlet } from "react-router-dom";
import { NavbarAdmin } from "./admin/components/navbar-admin/navbar-admin";
import { AddCar } from "./admin/components/add-car";
import { showFormContext } from "./context/showForm";
import { NewCar } from "./admin/forms/new-car";
import { useContext } from "react";
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

export const AdminLayout = () => {
  const { showForm } = useContext(showFormContext);

  return (
    <div style={{ display: "flex" }}>
      <NavbarAdmin />
      <main
        className="page-content"
        style={{ flex: 1, marginLeft: "10rem", padding: "1rem" }}
      >
        <Outlet />
        {showForm && <NewCar />}
        <AddCar />
      </main>
    </div>
  );
};
