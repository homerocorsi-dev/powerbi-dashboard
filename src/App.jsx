import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Asegurate de importar tu instancia
import Dashboard from "./pages/Dashboard";
import SingleUserLogin from "./components/SingleUserLogin";
import useAutoLogout from "./hooks/useAutoLogout"; // 👈 agregamos esta línea

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useAutoLogout(); // 👈 y la llamamos acá, justo dentro del componente

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div>Cargando...</div>;

  if (user) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Tablero asdasd</h1>
          <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </div>
        <Dashboard />
      </div>
    );
  }

  return (
    <div>
      <SingleUserLogin />
    </div>
  );
}
