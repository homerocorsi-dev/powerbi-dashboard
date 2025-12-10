import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Asegurate de importar tu instancia
import Dashboard from "./pages/Dashboard";
import SingleUserLogin from "./components/SingleUserLogin";
import useAutoLogout from "./hooks/useAutoLogout"; // 👈 agregamos esta línea

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [collapsed, setCollapsed] = useState(false); // 👈 NUEVO

  useAutoLogout();

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
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className={`dashboard-sidebar ${collapsed ? "collapsed" : ""}`}>

        {/* Botón para colapsar */}
        <button 
          className="sidebar-toggle"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <span className="icon">≡</span>
          
          {/* texto largo */}
          <span className="text-full">Menú</span>

          {/* texto corto (si querés puedes dejarlo igual al largo) */}
          <span className="text-short">Menú</span>
        </button>

        {/* Cerrar sesión */}
        <button onClick={() => signOut(auth)}>
          <span className="icon">🔒</span>

          {/* Texto largo */}
          <span className="text-full">Cerrar sesión</span>

          {/* Texto corto (se verá cuando ≤1180px) */}
          <span className="text-short">Cerrar</span>
        </button>

      </div>

      {/* CONTENIDO */}
      <div className="dashboard-content">
        <Dashboard />
      </div>

    </div>
  );
}

  return <SingleUserLogin />;
}
