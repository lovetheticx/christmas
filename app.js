const themeButton = document.querySelector(".mode-toggle");
const darkTheme = "dark-theme";
const iconTheme = "./images/mode-sun.svg"; // optional: switch to sun icon if desired
const moonTheme = "./images/mode-moon.svg";

themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(darkTheme);

  // Optional icon switch logic can go here
});
