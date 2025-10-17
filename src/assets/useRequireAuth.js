// Ejemplo: proteger una ruta (hook simple) src/hooks/useRequireAuth.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';


export default function useRequireAuth() {
const [loading, setLoading] = useState(true);
const navigate = useNavigate();


useEffect(() => {
const unsub = onAuthStateChanged(auth, (u) => {
if (!u) {
navigate('/login');
} else {
setLoading(false);
}
});
return () => unsub();
}, [navigate]);


return { loading };
}