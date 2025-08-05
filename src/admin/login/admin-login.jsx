import styles from "./login.module.css";
import Logo from "../../assets/images/logo.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { ButtonComponent } from "../../components/button/buttonComponent";

export const AdminLogin = () => {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <div className={styles.forms}>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="nome" />
            <div className={styles.password}>
              <input
                type={showPass ? "password" : "text"}
                placeholder="senha"
              />
              {showPass ? (
                <FaRegEye
                  onClick={() => setShowPass((prev) => !prev)}
                  className={styles.showPass}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPass((prev) => !prev)}
                  className={styles.showPass}
                />
              )}
            </div>
            <ButtonComponent text="login" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
