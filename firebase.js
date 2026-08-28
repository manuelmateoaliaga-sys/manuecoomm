```javascript
// Firebase de MANU ECOOM
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD38CacEVX_iVJZqwlmxsb5bW--WtTk8e4",
  authDomain: "manu-ecom.firebaseapp.com",
  projectId: "manu-ecom",
  storageBucket: "manu-ecom.firebasestorage.app",
  messagingSenderId: "461569348434",
  appId: "1:461569348434:web:b822e97aa9c4352f3da08b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Dejamos Firebase disponible para nuestros otros archivos
window.firebaseApp = app;
window.auth = auth;
window.db = db;
```
