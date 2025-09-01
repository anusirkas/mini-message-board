document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mode-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (toggle) toggle.textContent = "☀️";
    } else {
      document.body.classList.remove("dark");
      if (toggle) toggle.textContent = "🌙";
    }
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }
});
