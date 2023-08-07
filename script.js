const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}


// Theme Toggling
const styleDropdown = document.getElementById("style-dropdown");
const container = document.querySelector(".container");
const card = document.getElementById("card");
const options = document.querySelectorAll("#style-dropdown option");
styleDropdown.className = "light-neumorphism";
container.className = "container light-neumorphism";
card.className = "card light-neumorphism";
options.forEach((option) => {
  option.className = "light-neumorphism";
});

styleDropdown.addEventListener("change", () => {
  const selectedTheme = styleDropdown.value;

  container.className = `container ${selectedTheme}`;
  card.className = `card ${selectedTheme}`;
  styleDropdown.className = `${selectedTheme}`;

  // Apply the selected theme to dropdown options
  options.forEach((option) => {
    option.className = selectedTheme;
  });
});
