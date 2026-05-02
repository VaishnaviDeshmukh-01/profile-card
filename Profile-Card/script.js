
const toggleBtn = document.querySelector(".toggle-btn");
const card = document.querySelector(".card");
const likeBtn = document.querySelector(".like-btn");
let likeCount = 0;

function toggleDarkMode() {
    card.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = card.classList.contains("dark-mode") ? "🌙" : "☀️";
    localStorage.setItem("darkMode", card.classList.contains("dark-mode") ? "enabled" : "disabled");
}

function loadDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        card.classList.add("dark-mode");
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "🌙";
    }
}

// Like Button
likeBtn.addEventListener('click', () => {
    likeCount++;
    likeBtn.textContent = `❤️ ${likeCount}`;
    likeBtn.style.transform = "scale(1.5)";
    setTimeout(() => likeBtn.style.transform = "scale(1)", 200);
});

// Skills
document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("click", () => alert(`You clicked on ${skill.textContent}`));
});

// Contact Me
document.querySelector('.btn-secondary').addEventListener('click', () => {
    alert("Thank you! My email: deshmukh.vaishnavi1410@gmail.com");
});

toggleBtn.addEventListener('click', toggleDarkMode);
loadDarkMode();
