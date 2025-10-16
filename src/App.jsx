// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tablero San Miguel</h1>
      <p>Visualización integrada desde Power BI:</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          title="Tablero San Miguel"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=5b85c435-d279-4c86-80cf-1dc970ca32f5&autoAuth=true&ctid=23f951b0-6e6e-4f76-9ddb-daf5cd51b7a5"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}