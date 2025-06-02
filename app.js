// app.js

document.addEventListener("DOMContentLoaded", () => {
  populateButtons("angle-view-buttons", angleViews);
  populateButtons("lighting-buttons", lightingTypes);

  // Populate Activity Select
  const activitySelect = document.getElementById("activity");
  activities.forEach(act => {
    const option = document.createElement("option");
    option.value = act;
    option.textContent = act.charAt(0).toUpperCase() + act.slice(1);
    activitySelect.appendChild(option);
  });

  // Populate Background Select
  const backgroundSelect = document.getElementById("background");
  backgrounds.forEach(bg => {
    const option = document.createElement("option");
    option.value = bg;
    option.textContent = bg.charAt(0).toUpperCase() + bg.slice(1);
    backgroundSelect.appendChild(option);
  });

  // Filterable Art Styles
  document.getElementById("art-style-search").addEventListener("input", (e) => {
    const filtered = artStyles.filter(style =>
      style.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    populateButtons("art-style-buttons", filtered);
  });

  // Generate Prompt
  document.getElementById("generate-btn").addEventListener("click", generatePrompt);

  // Copy to clipboard
  document.getElementById("copy-btn").addEventListener("click", () => {
    const output = document.getElementById("prompt-output");
    output.select();
    document.execCommand("copy");
    alert("Prompt copied!");
  });

  // Dark mode toggle
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

function populateButtons(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.label;
    btn.setAttribute("data-tooltip", item.tooltip);
    btn.onclick = () => toggleSelection(btn);
    container.appendChild(btn);
  });
}

function toggleSelection(button) {
  button.classList.toggle("selected");
}

function generatePrompt() {
  const character = document.getElementById("character").value.trim();
  const activity = document.getElementById("activity").value;
  const background = document.getElementById("background").value;

  const selectedAngles = getSelectedTexts("angle-view-buttons");
  const selectedArtStyles = getSelectedTexts("art-style-buttons");
  const selectedLightings = getSelectedTexts("lighting-buttons");

  let promptID = `${character}, ${activity}, ${background}`;
  if (selectedAngles.length > 0) promptID += `, ${selectedAngles.join(", ")}`;
  if (selectedArtStyles.length > 0) promptID += `, ${selectedArtStyles.join(", ")}`;
  if (selectedLightings.length > 0) promptID += `, ${selectedLightings.join(", ")}`;

  const promptEN = translateToEnglish(promptID); // Placeholder function

  const output = document.getElementById("prompt-output");
  output.value = `ID: ${promptID}\n\nEN: ${promptEN}`;
}

function getSelectedTexts(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".selected")).map(btn => btn.innerText);
}

function translateToEnglish(text) {
  // You can use Google Translate API or static mapping here
  return text; // Simplified for demo
}
