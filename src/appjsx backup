import { useState } from "react";

const USER = import.meta.env.VITE_USER;
const PASS = import.meta.env.VITE_PASS;
const POWERBI_URL = import.meta.env.VITE_POWERBI_URL;

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === USER && pass === PASS) {
      setIsLogged(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  // --- LOGIN ---
  if (!isLogged) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg w-96 space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">Acceso privado</h2>

          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
    <h1 className="text-3xl font-semibold text-gray-800">Tablero</h1>
      <iframe
        title="Dashboard Power BI"
        src={POWERBI_URL}
        className="rounded-xl shadow-lg"
        style={{
          width: "75vw",
          height: "75vh",
          border: "none",
        }}
      />
    </div>
  );
}