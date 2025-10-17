// src/pages/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  const powerBIUrl = import.meta.env.VITE_POWERBI_URL;

  return (
    <div className="flex items-center justify-center w-full p-6 bg-gray-50">
      <iframe
        title="Dashboard Power BI"
        src={powerBIUrl}
        className="rounded-xl shadow-lg"
        style={{
          width: "80vw",
          height: "80vh",
          border: "none",
        }}
      />
    </div>
  );
}
