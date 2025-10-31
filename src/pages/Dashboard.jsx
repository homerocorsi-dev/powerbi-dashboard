// src/pages/Dashboard.jsx
import React from "react";
import "./dashboard.css";


export default function Dashboard() {
  const powerBIUrl = import.meta.env.VITE_POWERBI_URL;

  return (
<div className="dashboard-container">
  <div className="dashboard-frame">
    <iframe
      title="Dashboard Power BI"
      src={powerBIUrl}
      className="dashboard-iframe"
       frameborder="0" 
       allowFullScreen="true"
    />
  </div>
</div>
  );
}
