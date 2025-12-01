// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

export default function Dashboard() {
  const [powerBIUrl, setPowerBIUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      setLoading(true);
      setError(null);

      // Si por algun motivo no hay usuario, no intentamos leer
      if (!auth.currentUser) {
        setError("No autorizado");
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "config", "dashboard");
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          setError("Dashboard no configurado");
        } else {
          const data = snap.data();
          if (data.url) {
            setPowerBIUrl(data.url);
          } else {
            setError("Campo 'url' no encontrado en Firestore");
          }
        }
      } catch (err) {
        console.error("Error leyendo Firestore:", err);
        setError("Error leyendo la configuración");
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, []);

  if (loading) return <div>Cargando dashboard...</div>;
  if (error) return <div>{error}</div>;
  if (!powerBIUrl) return <div>No hay URL disponible</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-frame">
        <iframe
          width="1024"
          height="1060"
          title="Dashboard Power BI"
          src={powerBIUrl}
          className="dashboard-iframe"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
