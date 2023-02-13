import { Link } from "react-router-dom";
import styles from "./login.module.css";

interface LoginProps{
  handleSubmit: any
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  loginError: string

}

const Login = ({handleSubmit, username, setUsername, password, setPassword, loginError}: LoginProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.login__h1}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.login__form}>
          { loginError ? (
            <p className={styles.login__error}>{loginError}</p>
          ): (
            ''
          )}
          <div className={`${styles.login__username} ${styles.login__textField}`}>
            <input type="username" required
              value={username}
              onChange={ (e) => setUsername(e.target.value)}
              name="username"
              maxLength={20}/>
            <label htmlFor="username">Username</label>
          </div>
          <div className={`${styles.login__password} ${styles.login__textField}`}>
            <input type="password" id="password" required
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
              name="password"
              maxLength={20}/>
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.login__submit}>
            <button>Login</button>
          </div>
          <div className={styles.login__signup_link} >
            <p>Not a member? </p>
            <Link to="../register" className={styles.login__link}><p  style={{color: 'var(--color-orange)'}}>Sign up</p></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
