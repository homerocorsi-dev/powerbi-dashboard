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
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Iniciar sesión</h2>

      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <label className="block mb-2">Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {error && <div className="text-red-600 mb-2 text-center">{error}</div>}

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Entrar
      </button>
    </form>
  );
}
