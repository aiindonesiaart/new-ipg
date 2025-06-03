// Static Data
const angleViews = [
  { label: "Front View", tooltip: "Looking directly at the subject from the front." },
  { label: "Side View", tooltip: "Viewed from one side of the subject." },
  { label: "Over the Shoulder", tooltip: "Shot over someone's shoulder, focusing on what they see." },
  { label: "From Behind View", tooltip: "Camera placed behind the subject." },
  { label: "Dutch Angle", tooltip: "Tilted camera angle used to imply unease or tension." },
  { label: "Wide Angle View", tooltip: "Captures a wide field of view." },
  { label: "Low Angle View", tooltip: "Camera placed below eye level looking up." },
  { label: "Drone View", tooltip: "Aerial perspective using drone technology." },
  { label: "From Above View", tooltip: "Looking down onto the subject." },
  { label: "Top View", tooltip: "Directly above the subject." },
  { label: "Bird's Eye View", tooltip: "High-angle perspective as if from a bird in the sky." },
  { label: "From Below View", tooltip: "Camera placed under the subject, looking upward." },
  { label: "Worm Eye View", tooltip: "Extreme low-angle shot, almost from ground level." },
  { label: "Close Up", tooltip: "Focusing on a small part of the scene." },
  { label: "Extreme Close Up", tooltip: "Very tight framing, often just facial features." }
];

const artStyles = [
  { label: "Cartoon", tooltip: "A stylized drawing often exaggerated for humor or effect." },
  { label: "Anime", tooltip: "Japanese animation style." },
  { label: "3D", tooltip: "Three-dimensional digital modeling and rendering." },
  { label: "Photography", tooltip: "Realistic image capturing using camera techniques." },
  { label: "Artist", tooltip: "General artistic interpretation by hand or digital means." },
  { label: "Caricature", tooltip: "Exaggerated visual representation of a person or thing." },
  { label: "Surrealism", tooltip: "Dream-like imagery with unexpected juxtapositions." },
  { label: "Watercolor", tooltip: "Painting done with water-based pigments." },
  { label: "Oil Painting", tooltip: "Traditional painting technique using oil paints." },
  { label: "Pencil Sketch", tooltip: "Drawing created with graphite pencils." },
  { label: "Digital Art", tooltip: "Created using digital tools like Photoshop or Procreate." },
  { label: "Pop Art", tooltip: "Bright colors and bold patterns inspired by pop culture." },
  { label: "Abstract", tooltip: "Non-representational art focusing on form and color." },
  { label: "Cyberpunk", tooltip: "Futuristic high-tech low-life aesthetic." },
  { label: "Steampunk", tooltip: "Victorian-era fantasy with steam-powered machinery." },
  { label: "Graffiti", tooltip: "Street-style spray-painted art." },
  { label: "Neon", tooltip: "Bright glowing lights commonly seen in urban settings." },
  { label: "Studio Ghibli", tooltip: "Whimsical Japanese animated film style." },
  { label: "Fantasy", tooltip: "Imaginative worlds and creatures beyond reality." },
  { label: "Chiaroscuro", tooltip: "Use of strong contrasts between light and dark." },
  { label: "Airbrush", tooltip: "Smooth gradient air-sprayed paint application." }
];

const lightingTypes = [
  { label: "Ambient Light", tooltip: "General light filling the scene without direction." },
  { label: "Key Light", tooltip: "Primary source of illumination on the subject." },
  { label: "Fill Light", tooltip: "Softens shadows created by the key light." },
  { label: "Back Light", tooltip: "Placed behind the subject to separate them from the background." },
  { label: "Rim Light", tooltip: "Highlights the outline of the subject." },
  { label: "Diffuse Light", tooltip: "Even, soft light with no harsh shadows." },
  { label: "Hard Light", tooltip: "Creates sharp shadows and high contrast." },
  { label: "Spot Light", tooltip: "Focused beam of light on a specific area." }
];

const activities = [
  "walking",
  "running",
  "sitting",
  "standing",
  "looking at camera",
  "riding a bicycle",
  "thumbs up",
  "peace sign"
];

const backgrounds = [
  "white background",
  "colourful background",
  "laundry background",
  "in the garden",
  "on top of mountain"
];

// Global Variables for Pagination
let allArtStyles = [...artStyles];
let filteredArtStyles = [...artStyles];
const ARTS_PER_PAGE = 10;
let currentPage = 1;

function populateButtons(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.label;
    btn.setAttribute("data-tooltip", item.tooltip);
    btn.onclick = () => selectButton(btn, containerId);
    container.appendChild(btn);
  });
}

function filterArtStyles(query) {
  query = query.toLowerCase();
  filteredArtStyles = allArtStyles.filter(style =>
    style.label.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderArtStyleButtons();
  renderPagination();
}

function renderArtStyleButtons() {
  const container = document.getElementById("art-style-buttons");
  container.innerHTML = "";

  const start = (currentPage - 1) * ARTS_PER_PAGE;
  const end = start + ARTS_PER_PAGE;
  const pageItems = filteredArtStyles.slice(start, end);

  pageItems.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.label;
    btn.setAttribute("data-tooltip", item.tooltip);
    btn.onclick = () => selectButton(btn, "art-style-buttons");
    container.appendChild(btn);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(filteredArtStyles.length / ARTS_PER_PAGE);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages && i <= 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderArtStyleButtons();
      renderPagination();
    };
    paginationContainer.appendChild(btn);
  }
}

function selectButton(button, containerId) {
  const container = document.getElementById(containerId);
  const allButtons = container.querySelectorAll("button");

  button.classList.toggle("selected");

  allButtons.forEach(btn => {
    btn.style.display = btn.classList.contains("selected") ? "inline-block" : "none";
  });

  if (!Array.from(allButtons).some(btn => btn.classList.contains("selected"))) {
    allButtons.forEach(btn => btn.style.display = "inline-block");
  }

  alert(`${button.innerText} selected`);
}

function getSelectedTexts(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".selected")).map(btn => btn.innerText);
}

function populateDropdown(id, options) {
  const select = document.getElementById(id);
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    select.appendChild(opt);
  });
}

function addCustomTag(containerId, inputId) {
  const input = document.getElementById(inputId);
  const value = input.value.trim();
  if (value && !isTagExist(containerId, value)) {
    createTag(containerId, value);
    input.value = "";
  }
}

function createTag(containerId, text) {
  const container = document.getElementById(containerId);
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "×";
  removeBtn.onclick = () => container.removeChild(tag);

  tag.appendChild(removeBtn);
  container.appendChild(tag);
}

function isTagExist(containerId, text) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).some(tag => tag.textContent.includes(text));
}

function getAddedTags(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).map(tag => tag.textContent.replace("×", "").trim());
}

function generatePrompt() {
  const selectedAngles = getSelectedTexts("angle-view-buttons");
  const selectedArtStyles = getSelectedTexts("art-style-buttons");
  const character = document.getElementById("character").value.trim();
  const addedActivities = getAddedTags("added-activities");
  const selectedLightings = getSelectedTexts("lighting-buttons");
  const addedBackgrounds = getAddedTags("added-backgrounds");

  const promptParts = [];

  if (selectedAngles.length > 0) promptParts.push(selectedAngles.join(", "));
  if (selectedArtStyles.length > 0) promptParts.push(selectedArtStyles.join(", "));
  if (character) promptParts.push(character);
  if (addedActivities.length > 0) promptParts.push(addedActivities.join(", "));
  if (selectedLightings.length > 0) promptParts.push(selectedLightings.join(", "));
  if (addedBackgrounds.length > 0) promptParts.push(addedBackgrounds.join(", "));

  document.getElementById("prompt-output").value = promptParts.join(", ");
}

function copyToClipboard() {
  const output = document.getElementById("prompt-output");
  output.select();
  document.execCommand("copy");
  alert("Prompt copied!");
}

document.addEventListener("DOMContentLoaded", () => {
  populateButtons("angle-view-buttons", angleViews);
  populateButtons("lighting-buttons", lightingTypes);

  populateDropdown("activity-select", activities);
  populateDropdown("background-select", backgrounds);

  renderArtStyleButtons();
  renderPagination();

  document.getElementById("generate-btn").addEventListener("click", generatePrompt);
  document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
