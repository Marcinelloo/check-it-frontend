import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";

const LoginPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  window.document.title = "Login...";

  const handleLogin = async (e: any) => {
    e.preventDefault();

    // handle login
    navigate("/dashboard");
  };

  return (
    <main className="wrapper">
      <div className="main-wrapper">
        <h1 className="login-info">Zaloguj się</h1>
        <form onSubmit={handleLogin} className="login-from">
          <input
            ref={loginRef}
            type="text"
            className="input-login"
            placeholder="Login"
            autoComplete="off"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            className="input-login"
            placeholder="Hasło"
            autoComplete="off"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
