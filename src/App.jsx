// src/App.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import SingleUserLogin from "./components/SingleUserLogin";
import Dashboard from "./pages/Dashboard";

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

  if (loading) return <div className="p-8 text-center">Cargando...</div>;

  if (user) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <div className="w-full flex justify-between items-center p-4 bg-white shadow">
          <h1 className="text-xl font-bold">Tablero</h1>
          <button
            onClick={() => signOut(auth)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cerrar sesión
          </button>
        </div>
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SingleUserLogin />
    </div>
  );
}
