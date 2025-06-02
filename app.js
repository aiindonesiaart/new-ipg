// app.js

document.addEventListener("DOMContentLoaded", () => {
  populateButtons("angle-view-buttons", angleViews);
  populateButtons("lighting-buttons", lightingTypes);
  populateButtons("art-style-buttons", artStyles);

  // Populate dropdowns
  populateDropdown("activity-select", activities);
  populateDropdown("background-select", backgrounds);

  // Searchable Art Styles
  document.getElementById("art-style-search").addEventListener("input", e => {
    const filtered = artStyles.filter(style =>
      style.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    populateButtons("art-style-buttons", filtered);
  });

  // Add Custom Activity
  document.getElementById("add-activity-btn").addEventListener("click", () => {
    const input = document.getElementById("custom-activity");
    if (input.value.trim()) {
      createTag("added-activities", input.value.trim());
      input.value = "";
    }
  });

  // Add Custom Background
  document.getElementById("add-background-btn").addEventListener("click", () => {
    const input = document.getElementById("custom-background");
    if (input.value.trim()) {
      createTag("added-backgrounds", input.value.trim());
      input.value = "";
    }
  });

  // Select Option and Add Tag
  document.getElementById("activity-select").addEventListener("change", e => {
    const value = e.target.value;
    if (value && !isTagExist("added-activities", value)) {
      createTag("added-activities", value);
    }
  });

  document.getElementById("background-select").addEventListener("change", e => {
    const value = e.target.value;
    if (value && !isTagExist("added-backgrounds", value)) {
      createTag("added-backgrounds", value);
    }
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
    btn.onclick = () => selectButton(btn, containerId);
    container.appendChild(btn);
  });
}

function selectButton(button, containerId) {
  const container = document.getElementById(containerId);
  const allButtons = container.querySelectorAll("button");

  button.classList.toggle("selected");

  // Show only selected
  allButtons.forEach(btn => {
    btn.style.display = btn.classList.contains("selected") ? "inline-block" : "none";
  });

  // Show all again if none selected
  if (!Array.from(allButtons).some(btn => btn.classList.contains("selected"))) {
    allButtons.forEach(btn => btn.style.display = "inline-block");
  }

  alert(`${button.innerText} selected`);
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

function generatePrompt() {
  const character = document.getElementById("character").value.trim();

  const selectedAngles = getSelectedTexts("angle-view-buttons");
  const selectedArtStyles = getSelectedTexts("art-style-buttons");
  const selectedLightings = getSelectedTexts("lighting-buttons");

  const addedActivities = getAddedTags("added-activities");
  const addedBackgrounds = getAddedTags("added-backgrounds");

  let prompt = `${character}`;

  if (addedActivities.length > 0) prompt += `, ${addedActivities.join(", ")}`;
  if (addedBackgrounds.length > 0) prompt += `, ${addedBackgrounds.join(", ")}`;
  if (selectedAngles.length > 0) prompt += `, ${selectedAngles.join(", ")}`;
  if (selectedArtStyles.length > 0) prompt += `, ${selectedArtStyles.join(", ")}`;
  if (selectedLightings.length > 0) prompt += `, ${selectedLightings.join(", ")}`;

  document.getElementById("prompt-output").value = prompt;
}

function getSelectedTexts(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".selected")).map(btn => btn.innerText);
}

function getAddedTags(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).map(tag => tag.textContent.replace("×", "").trim());
}
