document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.querySelector("#mode-toggle");
  const html = document.documentElement;

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  });
});
