// src/components/SingleUserLogin.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function SingleUserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Credenciales incorrectas");
    }
  };

 return (
  <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <h2>Iniciar sesión</h2>

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="login-input" /* opcional si querés una clase específica, no necesaria si tu CSS usa .login-form input */
      />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />

      {error && <div>{error}</div>}

      <button type="submit" className="login-button">
        Entrar
      </button>
    </form>
  </div>
);
}
