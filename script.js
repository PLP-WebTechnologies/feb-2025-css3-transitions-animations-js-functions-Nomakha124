const button = document.getElementById("animateBtn");
const title = document.getElementById("title");

// Load preference from localStorage
const savedColor = localStorage.getItem("titleColor");
if (savedColor) {
  title.style.color = savedColor;
}

// Function to trigger animation and store color preference
button.addEventListener("click", () => {
  title.classList.add("bounce");

  // Random color generation
  const newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  title.style.color = newColor;
  localStorage.setItem("titleColor", newColor);

  // Remove animation class after it ends
  setTimeout(() => {
    title.classList.remove("bounce");
  }, 500);
});
