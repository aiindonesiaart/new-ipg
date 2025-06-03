// Static Data from uploaded file
const angleViews = [
  { label: "Front View", tooltip: "Looking directly at the subject from the front." },
  { label: "Side View", tooltip: "Viewed from one side of the subject." },
  { label: "Over the Shoulder", tooltip: "Shot over someone's shoulder, focusing on what they see." },
  { label: "From Behind View", tooltip: "Camera placed behind the subject." },
  { label: "Dutch Angle", tooltip: "Tilted camera angle used to imply unease or tension." },
  // ... include all other views
];

const artStyles = [
  { label: "Cartoon", tooltip: "A stylized drawing often exaggerated for humor or effect." },
  { label: "Anime", tooltip: "Japanese animation style characterized by vibrant visuals and emotional storytelling." },
  // ... include all other styles
];

const lightingTypes = [
  { label: "Ambient Light", tooltip: "General light filling the scene without direction." },
  { label: "Key Light", tooltip: "Primary source of illumination on the subject." },
  // ... include all other lighting types
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

const characterExamples = [
  "a man with small moustache",
  "a girl with messy hair",
  "an Indonesian woman with orange hijab, wearing long loose blue shirt",
  "a young boy holding a skateboard",
  "a robot with glowing eyes and metallic skin",
  "a fantasy warrior in armor riding a dragon",
  "a cute chibi anime girl with bunny ears",
  "a tall alien with large black eyes and grey skin",
  "a steampunk inventor with goggles and mechanical arm",
  "a medieval knight with golden armor and red cape"
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

  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "←";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderArtStyleButtons();
      renderPagination();
    }
  };
  paginationContainer.appendChild(prevBtn);

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  if (currentPage < 3) endPage = Math.min(5, totalPages);
  if (currentPage > totalPages - 2) startPage = Math.max(totalPages - 4, 1);

  for (let i = startPage; i <= endPage; i++) {
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

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "→";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderArtStyleButtons();
      renderPagination();
    }
  };
  paginationContainer.appendChild(nextBtn);
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

function handleAutocomplete(type) {
  const input = document.getElementById(`${type}-input`);
  const value = input.value.toLowerCase();
  const suggestionsContainer = document.getElementById(`${type}-suggestions`);

  suggestionsContainer.innerHTML = "";
  if (!value) {
    suggestionsContainer.classList.remove("active");
    return;
  }

  const list = type === "activity" ? activities : backgrounds;
  const matches = list.filter(item => item.toLowerCase().includes(value));
  matches.slice(0, 5).forEach(match => {
    const div = document.createElement("div");
    div.textContent = match;
    div.onclick = () => {
      input.value = match;
      suggestionsContainer.classList.remove("active");
    };
    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.classList.add("active");
}

function handleCharacterAutocomplete() {
  const input = document.getElementById("character-input");
  const value = input.value.toLowerCase();
  const suggestionsContainer = document.getElementById("character-suggestions");

  suggestionsContainer.innerHTML = "";
  if (!value) {
    suggestionsContainer.classList.remove("active");
    return;
  }

  const matches = characterExamples.filter(item => item.toLowerCase().includes(value));
  matches.slice(0, 5).forEach(match => {
    const div = document.createElement("div");
    div.textContent = match;
    div.onclick = () => {
      input.value = match;
      suggestionsContainer.classList.remove("active");
    };
    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.classList.add("active");
}

document.addEventListener("click", function(event) {
  const autocompletes = document.querySelectorAll(".autocomplete");
  autocompletes.forEach(ac => {
    if (!ac.contains(event.target) && !event.target.matches(`[id$="-input"]`)) {
      ac.classList.remove("active");
    }
  });
});

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

function getSelectedTexts(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".selected")).map(btn => btn.innerText);
}

function getAddedTags(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).map(tag => tag.textContent.replace("×", "").trim());
}

function generatePrompt() {
  const selectedAngles = getSelectedTexts("angle-view-buttons");
  const selectedArtStyles = getSelectedTexts("art-style-buttons");
  const character = document.getElementById("character-input").value.trim();

  const selectedActivity = document.getElementById("activity-input").value.trim();
  const addedActivities = getAddedTags("added-activities");

  const selectedLightings = getSelectedTexts("lighting-buttons");

  const selectedBackground = document.getElementById("background-input").value.trim();
  const addedBackgrounds = getAddedTags("added-backgrounds");

  const promptParts = [];

  if (selectedAngles.length > 0) promptParts.push(selectedAngles.join(", "));
  if (selectedArtStyles.length > 0) promptParts.push(selectedArtStyles.join(", "));
  if (character) promptParts.push(character);
  if (selectedActivity) promptParts.push(selectedActivity);
  if (addedActivities.length > 0) promptParts.push(addedActivities.join(", "));
  if (selectedLightings.length > 0) promptParts.push(selectedLightings.join(", "));
  if (selectedBackground) promptParts.push(selectedBackground);
  if (addedBackgrounds.length > 0) promptParts.push(addedBackgrounds.join(", "));

  document.getElementById("prompt-output").value = promptParts.join(", ");
}

function copyToClipboard() {
  const output = document.getElementById("prompt-output");
  output.select();
  document.execCommand("copy");
  alert("Prompt copied!");
}

async function refinePromptWithGemini(prompt) {
  const apiKey = "YOUR_GEMINI_API_KEY"; // Replace with actual key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [{ text: `Refine this image generation prompt:\n\n${prompt}` }]
      }]
    })
  });

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || prompt;
}

async function generateImageWithDallE(prompt) {
  const openaiApiKey = "YOUR_OPENAI_API_KEY"; // Replace with actual key

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openaiApiKey}`
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size: "1024x1024"
    })
  });

  const data = await response.json();
  return data.data?.[0]?.url;
}

async function generateImageFromPrompt() {
  const promptOutput = document.getElementById("prompt-output").value.trim();
  if (!promptOutput) {
    alert("Please generate a prompt first.");
    return;
  }

  const imagePreview = document.getElementById("image-preview");
  const loadingText = document.getElementById("image-loading");
  imagePreview.style.display = "none";
  loadingText.style.display = "block";

  try {
    const refinedPrompt = await refinePromptWithGemini(promptOutput);
    const imageUrl = await generateImageWithDallE(refinedPrompt);

    imagePreview.src = imageUrl;
    imagePreview.style.display = "block";
    loadingText.style.display = "none";
  } catch (error) {
    alert("Failed to generate image: " + error.message);
    loadingText.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateButtons("angle-view-buttons", angleViews);
  populateButtons("lighting-buttons", lightingTypes);

  renderArtStyleButtons();
  renderPagination();

  document.getElementById("generate-btn").addEventListener("click", generatePrompt);
  document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  document.getElementById("generate-image-btn").addEventListener("click", generateImageFromPrompt);
});
