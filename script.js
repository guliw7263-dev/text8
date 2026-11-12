
// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader")
            .classList.add("hide");
    }, 700);
});

// Mobile menu
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.textContent = nav.classList.contains("show")
        ? "✕" : "☰";
});

// Menu link bosilganda yopiladi
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        menu.textContent = "☰";
    });
});

// Portfolio filter
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".work-card");

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        projects.forEach(project => {
            const show =
                category === "all" ||
                project.dataset.category === category;

            project.classList.toggle("hide", !show);
        });
    });
});

// Contact form demo
document.getElementById("contactForm")
.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("response").textContent =
        `Rahmat, ${name}! Xabaringiz qabul qilindi.`;

    this.reset();
});
