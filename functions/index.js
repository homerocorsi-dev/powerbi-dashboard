const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// URL privada del dashboard (¡NO la pongas en React nunca más!)
const DASHBOARD_URL = "https://app.powerbi.com/view?r=xxxx";

exports.getDashboardUrl = functions.https.onCall((data, context) => {
  // Validar usuario autenticado
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Debes iniciar sesión."
    );
  }

  // Aquí podrías generar embed tokens si fuera necesario
  return { url: DASHBOARD_URL };
});
