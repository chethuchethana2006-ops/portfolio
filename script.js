const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});