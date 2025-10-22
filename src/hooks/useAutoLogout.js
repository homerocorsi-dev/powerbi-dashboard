import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

export default function useAutoLogout() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const loginTime = localStorage.getItem("loginTime");
        const now = Date.now();
        const threeHours = 3 * 60 * 1000; // 3 minutos (para pruebas)

        if (!loginTime) {
          localStorage.setItem("loginTime", now.toString());
        } else if (now - parseInt(loginTime) > threeHours) {
          signOut(auth);
          localStorage.removeItem("loginTime");
          alert("Tu sesión ha expirado. Por favor, vuelve a iniciar sesión.");
        }
      } else {
        localStorage.removeItem("loginTime");
      }
    });

    return () => unsub();
  }, []);
}
