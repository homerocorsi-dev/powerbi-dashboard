// src/App.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import SingleUserLogin from "./components/SingleUserLogin";
import Dashboard from "./pages/Dashboard";
import "./pages/dashboard.css";


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <h1>Tablero</h1>
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
