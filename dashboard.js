// =====================
// FIREBASE SETUP
// =====================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgFpLoDBZ-JxOXyaMJNxB_rbCoa91jSPA",
  authDomain: "studiox-b6f70.firebaseapp.com",
  projectId: "studiox-b6f70",
  storageBucket: "studiox-b6f70.firebasestorage.app",
  messagingSenderId: "181987957314",
  appId: "1:181987957314:web:2e35d718a1aa80b6946bdb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// =====================
// LOAD LEADS
// =====================
async function loadLeads() {

  const container = document.getElementById("leadsContainer");
  container.innerHTML = "Loading...";

  const querySnapshot = await getDocs(collection(db, "leads"));

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const card = document.createElement("div");
    card.className = "lead-card";

    card.innerHTML = `
      <h3>${data.business || "No Name"}</h3>
      <p><strong>Industry:</strong> ${data.industry}</p>
      <p><strong>Goal:</strong> ${data.goal}</p>

      <p><strong>Type:</strong> ${data.type}</p>
      <p><strong>Style:</strong> ${data.style}</p>

      <p><strong>Price:</strong> £${data.priceEstimate}</p>
      <p><strong>Complexity:</strong> ${data.complexity}</p>

      <span class="status">${data.status}</span>
    `;

    container.appendChild(card);
  });

}

loadLeads();
