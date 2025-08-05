import styles from "./dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>

      <div className={styles.header}>
        <div className={styles.header_item}>
          <div className={styles.label}>
            <p>vendidos</p>
          </div>
          <h1>100</h1>
        </div>
        <div className={styles.header_item}>
          <div className={styles.label}>
            <p>ativos</p>
          </div>
          <h1>20</h1>
        </div>
        <div className={styles.header_item}>
          <div className={styles.label}>
            <p>total</p>
          </div>
          <h1>200</h1>
        </div>
      </div>
    </div>
  );
};
