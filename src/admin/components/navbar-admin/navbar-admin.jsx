import styles from "./navbar-admin.module.css";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router";

export const NavbarAdmin = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <FaHome />
        <Link to="admin/dashboard">Dashboard</Link>
      </div>
      <div className={styles.navItem}>
        <FaChartBar />
        <Link to="/admin/reports">Relatórios</Link>
      </div>
      <div className={styles.navItem}>
        <FaCog />
        <Link>Config</Link>
      </div>
    </div>
  );
};
