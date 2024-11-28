import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('collapsed');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('collapsed');
        }
    });
});

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9Sav6ec416qYeBNjlxzygyk6-AKKM-8U",
    authDomain: "portfolio-project-91f43.firebaseapp.com",
    projectId: "portfolio-project-91f43",
    storageBucket: "portfolio-project-91f43.appspot.com",
    messagingSenderId: "385274855124",
    appId: "1:385274855124:web:1c0b22414a901f27ecc541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch and display data from Firestore
async function fetchAndDisplayData() {
    try {
        const querySnapshot = await getDocs(collection(db, "projects")); // Ganti dengan nama koleksi Anda
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const imageUrl = data.image_url;
            const category = data.category;
            const name = data.name;
            const url = data.url;
            const description = data.description; 

            // Create project card
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
            projectCard.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("${imageUrl}")`;
            projectCard.innerHTML = `<p>${name}</p>`;

            // Add click event to project card
            projectCard.addEventListener('click', function () {
                document.getElementById('popup-title').innerText = name;
                document.getElementById('popup-description').innerText = description;
                document.getElementById('popup-url').href = url;
                document.getElementById('popup-image').src = imageUrl;

                document.getElementById('project-popup').style.display = 'block';
            });

            // Add project card to corresponding grid
            switch (category) {
                case "Data Science & Analytics":
                    document.getElementById("data-science-grid").appendChild(projectCard);
                    break;
                case "Web Development":
                    document.getElementById("web-dev-grid").appendChild(projectCard);
                    break;
                case "Flutter Mobile Development":
                    document.getElementById("flutter-grid").appendChild(projectCard);
                    break;
                default:
                    console.log("Unknown category:", category);
            }
        });
    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
}

// Close the popup when the user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('project-popup').style.display = 'none';
});
// Add event listener for the button to open the project URL
document.getElementById('popup-url').addEventListener('click', function() {
    const url = this.href;
    window.open(url, '_blank'); // Open the URL in a new tab
});

// Call the function to fetch and display data
fetchAndDisplayData();
