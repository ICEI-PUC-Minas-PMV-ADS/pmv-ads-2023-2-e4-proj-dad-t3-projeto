import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "./context/authContext";

export default function Login() {
  const ctx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    let token = null;
    try {
      const response = await axios.post(
        "https://localhost:7162/api/user/authenticate",
        {
          email: email,
          senha: password,
        }
      );
      token = response.data.jwtToken;
      ctx.onLogin(token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("E-mail e/ou senha inválidos. Por favor, tente novamente.");
      } else {
        setError("Um erro ocorreu, tente novamente mais tarde.");
      }
    }
  };

  return (
    <>
      <div id="box-login">
        <div id="teste">
          <h3 class="login-title">Login</h3>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <form id="input-position" onSubmit={loginHandler}>
            <input
              class="user-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              class="password-input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button class="enter-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
