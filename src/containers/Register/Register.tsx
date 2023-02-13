import { Link } from "react-router-dom";
import styles from "./register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    const registerData = {
      email,
      username,
      password,
    };

    fetch("http://localhost/react-php/register.php", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.text())
      .catch((error) => console.error(error));

    navigateTo("/login");
  }
  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1 className={styles.register__h1}>Register</h1>
        <form onSubmit={handleSubmit} className={styles.register__form}>
          <div
            className={`${styles.register__email} ${styles.register__textField}`}
          >
            <input
              type="email"
              required
              name="email"
              maxLength={30}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div
            className={`${styles.register__username} ${styles.register__textField}`}
          >
            <input
              type="text"
              required
              name="username"
              maxLength={20}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div
            className={`${styles.register__password} ${styles.register__textField}`}
          >
            <input
              type="password"
              id="password"
              required
              name="password"
              maxLength={20}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.register__submit}>
            <button>Register</button>
          </div>
          <div className={styles.register__signup_link}>
            <p>Already have account? </p>
            <Link to="../login" className={styles.register__link}>
              <p style={{ color: "var(--color-orange)" }}>Sign in</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
