import styles from "./navbar-admin.module.css";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router";

export const NavbarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div
        className={styles.navItem}
        onClick={() => navigate("/admin/dashboard")}
      >
        <FaHome />
        <a>Dashboard</a>
      </div>
      <div
        className={styles.navItem}
        onClick={() => navigate("/admin/reports")}
      >
        <FaChartBar />
        <a>Relatórios</a>
      </div>
      <div className={styles.navItem}>
        <FaCog />
        <a>Config</a>
      </div>
    </div>
  );
};
