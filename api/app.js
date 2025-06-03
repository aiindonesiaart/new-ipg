// Static Data from your uploaded file
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
  { label: "Anime", tooltip: "Japanese animation style characterized by vibrant visuals and emotional storytelling." },
  { label: "3D", tooltip: "Three-dimensional digital modeling and rendering for realistic or stylized visuals." },
  { label: "3D-Pixlar", tooltip: "Pixel-style 3D renderings combining retro pixel aesthetics with modern 3D techniques." },
  { label: "Caricature", tooltip: "Exaggerated visual representation of a person or thing for humorous or artistic effect." },
  { label: "3D Caricature", tooltip: "Three-dimensional caricature with exaggerated features and expressive design." },
  { label: "Caricature Big Head", tooltip: "A caricature style where the head is exaggeratedly large compared to the body." },
  { label: "Cyberpunk", tooltip: "Futuristic neon-lit dystopia with high-tech and low-life themes." },
  { label: "Steampunk", tooltip: "Victorian-inspired sci-fi blending steam-powered technology with ornate design." },
  { label: "Origami", tooltip: "Artistic folding of paper into intricate shapes and figures." },
  { label: "Kawaii Chibi", tooltip: "Super cute, exaggerated head-to-body ratio Japanese cartoon style." },
  { label: "Graffiti", tooltip: "Urban street art featuring stylized lettering and bold imagery." },
  { label: "Neon", tooltip: "Bright glowing colors mimicking electric neon signs." },
  { label: "Chiaroscuro", tooltip: "Use of strong contrasts between light and dark to create depth and drama." },
  { label: "Airbrush", tooltip: "Smooth gradient-based painting technique using an airbrush tool." },
  { label: "Pop Art", tooltip: "Bold, colorful style inspired by advertising and pop culture." },
  { label: "Watercolour", tooltip: "Painting done with water-based pigments creating soft and flowing textures." },
  { label: "Studio Ghibli", tooltip: "Dreamy, whimsical anime style from the renowned Japanese animation studio." },
  { label: "Fantasy", tooltip: "Imaginative worlds and creatures beyond reality, often seen in games and books." },
  { label: "Oil Painting", tooltip: "Traditional thick-textured painting using oil-based pigments." },
  { label: "Pencil Sketching", tooltip: "Drawing created with graphite pencils, showing shading and outlines." },
  { label: "Charcoal", tooltip: "Loose, dramatic black-and-white drawings using charcoal sticks." },
  { label: "Rococo", tooltip: "Ornate 18th-century European style with curvy lines and playful elegance." },
  { label: "Fractalism", tooltip: "Digital art based on self-repeating mathematical patterns and structures." },
  { label: "Realism", tooltip: "Highly detailed and lifelike depiction of subjects as they appear in real life." },
  { label: "Surrealism", tooltip: "Dream-like imagery with unexpected juxtapositions and symbolic elements." },
  { label: "Abstract", tooltip: "Non-representational art focusing on color, form, and emotion." },
  { label: "Psychedelic", tooltip: "Trippy, colorful visuals inspired by hallucinogenic experiences and 60s counterculture." },
  { label: "Retro", tooltip: "Stylized throwback to vintage designs and media from past decades." },
  { label: "Papercut", tooltip: "Intricate artwork made by cutting paper into elaborate patterns." },
  { label: "Sticker", tooltip: "Flat, illustrative design resembling printed stickers." },
  { label: "Whimsical Art Style", tooltip: "Playful, imaginative, and slightly surreal artistic expression." },
  { label: "Macro Photography", tooltip: "Extreme close-up photography capturing fine details." },
  { label: "Only Black Lines", tooltip: "Monochrome line work without color or shading." },
  { label: "Claymation", tooltip: "Stop-motion animation using clay figures." },
  { label: "Paper Quilling", tooltip: "Decorative art using rolled strips of paper to create designs." },
  { label: "Pastels", tooltip: "Soft, powdery colors applied with chalk-like sticks." },
  { label: "Art Deco", tooltip: "Luxurious geometric style popular in the 1920s and 1930s." },
  { label: "Batik", tooltip: "Wax-resist dyeing technique used in traditional fabric art." },
  { label: "Contemporary", tooltip: "Modern art reflecting current trends and experimentation." },
  { label: "Patchwork", tooltip: "Art made by sewing together pieces of fabric in a patterned design." },
  { label: "Expressionism", tooltip: "Emotionally intense style emphasizing subjective experience over realism." },
  { label: "Impressionism", tooltip: "Loose brushwork and light-filled scenes capturing fleeting moments." },
  { label: "Vexel", tooltip: "Vector-based pixel art blending raster and vector techniques." },
  { label: "Conceptual", tooltip: "Art where the idea behind the piece is more important than its physical form." },
  { label: "Voxel", tooltip: "3D pixel art style similar to Minecraft and other blocky digital creations." },
  { label: "Halftone Print", tooltip: "Printmaking technique using dots to simulate continuous tones." },
  { label: "Action Painting", tooltip: "Dynamic abstract painting created through spontaneous gestures like splashing." },
  { label: "Holography", tooltip: "Three-dimensional optical illusion created with laser light." },
  { label: "Photo Realism", tooltip: "Hyper-detailed paintings or drawings mimicking photographs." },
  { label: "Knitted", tooltip: "Textures and patterns inspired by hand-knitted fabrics." },
  { label: "Japanese Art", tooltip: "Traditional or modern art rooted in Japanese culture and aesthetics." },
  { label: "Polaroid", tooltip: "Instant film photography look with white borders and faded tones." },
  { label: "Pointilism", tooltip: "Painting technique using small colored dots to form an image." },
  { label: "Romanticism", tooltip: "Emotional and dramatic style celebrating nature and individualism." },
  { label: "Babylonian", tooltip: "Ancient Mesopotamian art with cuneiform motifs and symbolic reliefs." },
  { label: "Mexican Muralism", tooltip: "Large-scale public murals depicting social and political themes." },
  { label: "Ancient Egyptian", tooltip: "Iconic hieroglyphics, profile figures, and symbolic proportions." },
  { label: "Precisionism", tooltip: "Early American modernist style focused on sharp lines and industrial forms." },
  { label: "Glitchcore", tooltip: "Digital aesthetic embracing errors, corruption, and distorted visuals." },
  { label: "Syntwave", tooltip: "Synthetic wave style blending retro-futurism, neon lights, and VHS nostalgia." },
  { label: "Vaporwave", tooltip: "Digital aesthetic inspired by 80s/90s consumerism, glitches, and synth music." },
  { label: "Post-Apocalyptic", tooltip: "Desolate world after societal collapse, often gritty and survival-focused." },
  { label: "Symbolism", tooltip: "Art that uses symbols and metaphors to express deeper ideas and emotions." },
  { label: "Iridescent", tooltip: "Shimmering surfaces that change color depending on the angle of view." },
  { label: "Ukiyo-e", tooltip: "Traditional Japanese woodblock prints depicting landscapes and daily life." },
  { label: "Optical Illusion", tooltip: "Visual trickery designed to confuse perception and challenge the eye." },
  { label: "Letterpress Print", tooltip: "Vintage printing technique with deep embossed ink impressions." },
  { label: "Renaissance", tooltip: "Classical European style emphasizing realism, perspective, and humanism." },
  { label: "Pixel Art", tooltip: "Digital art composed of small square pixels, reminiscent of old video games." },
  { label: "Gothic", tooltip: "Dark, ornate medieval European style with religious and mystical themes." },
  { label: "Xenography", tooltip: "Unconventional text-based art imitating foreign or alien writing systems." },
  { label: "Retrowave", tooltip: "Nostalgic futuristic style evoking 80s neon and synthwave culture." },
  { label: "Alebrije", tooltip: "Colorful Mexican folk art depicting fantastical animal creatures." },
  { label: "Luminogram", tooltip: "Light-painted abstract images created by manipulating light directly onto film." },
  { label: "Chinese Watercolor", tooltip: "Elegant ink wash painting with minimal strokes and poetic composition." },
  { label: "Dadaism", tooltip: "Anti-art movement rejecting logic in favor of absurdity and randomness." },
  { label: "Photogram", tooltip: "Camera-less photography made by placing objects directly onto photosensitive paper." },
  { label: "Mannerism", tooltip: "Late Renaissance style marked by elongated forms and complex poses." },
  { label: "Cybermetic", tooltip: "Futuristic biomechanical fusion of organic and mechanical elements." },
  { label: "Sketchnote", tooltip: "Hand-drawn notes combining illustration and typography for visual thinking." },
  { label: "Constructivism", tooltip: "Russian avant-garde movement focused on industrial materials and geometry." },
  { label: "Neoclassicism", tooltip: "Revival of classical Greek and Roman ideals in balanced and refined compositions." },
  { label: "Zentangle", tooltip: "Patterned doodling method promoting mindfulness and relaxation." },
  { label: "Cyanotype Print", tooltip: "Historical photographic process producing blue-toned prints." },
  { label: "Azulejo", tooltip: "Portuguese ceramic tile art known for vivid colors and intricate patterns." },
  { label: "Niji", tooltip: "Japanese-style coloring and illustration with soft gradients and anime influence." },
  { label: "Grisaille", tooltip: "Monochrome painting in shades of gray, often used for sculptural effects." },
  { label: "Post Impressionism", tooltip: "Follow-up to impressionism with bolder colors and expressive brushwork." },
  { label: "Erbu", tooltip: "Traditional Chinese ink-wash landscape painting." },
  { label: "Cross Hatching", tooltip: "Shading technique using intersecting parallel lines." },
  { label: "Wabi-Sabi", tooltip: "Japanese aesthetic embracing imperfection, transience, and simplicity." },
  { label: "Magical Realism", tooltip: "Blending fantasy elements with realistic settings." },
  { label: "Enamelled", tooltip: "Metallic, glossy finish mimicking vitreous enamel artwork." },
  { label: "Etching", tooltip: "Printmaking technique involving acid-treated metal plates." },
  { label: "Linocut Print", tooltip: "Relief print made by carving linoleum blocks." },
  { label: "Dystopian", tooltip: "Oppressive future society depicted with bleak and controlling environments." },
  { label: "Bauhaus", tooltip: "German design school merging art, craft, and function in minimalist forms." },
  { label: "Poly Art", tooltip: "Low-poly 3D polygonal style with faceted surfaces and clean edges." },
  { label: "Glass Art", tooltip: "Translucent, reflective designs mimicking stained or blown glass." },
  { label: "Medieval", tooltip: "European art from the Middle Ages, often religious and ornamental." },
  { label: "Hieroglyphics", tooltip: "Ancient Egyptian pictorial writing system carved or painted on monuments." },
  { label: "Organic Abstract", tooltip: "Free-flowing, natural shapes and biomorphic forms in abstract style." },
  { label: "Thermograph", tooltip: "Raised-print effect simulating heat-sensitive or embossed graphics." },
  { label: "Marble", tooltip: "Swirled textures mimicking natural marble stone patterns." },
  { label: "Pre-Raphaelite", tooltip: "Richly detailed Victorian-era art inspired by medieval and early Renaissance styles." },
  { label: "Anthotype", tooltip: "Historical photographic process using plant emulsions to create soft images." },
  { label: "Mosaic", tooltip: "Art made by assembling small colored pieces into a larger image." },
  { label: "Isometric", tooltip: "3D illustration viewed at an angle without perspective distortion." },
  { label: "Amigurumi", tooltip: "Crocheted or knitted plush toys with cute, stylized designs." },
  { label: "Cross Processing", tooltip: "Film processing technique that creates unusual color tones." },
  { label: "Infrared Photography", tooltip: "Captures invisible infrared light, producing surreal landscapes." },
  { label: "Cubism", tooltip: "Fragmented, multi-angle depictions pioneered by Picasso and Braque." },
  { label: "Glass Morphism", tooltip: "Modern UI design style with frosted glass transparency effects." },
  { label: "Minimalism", tooltip: "Simple, clean design with focus on space, color, and form." },
  { label: "Arabesque", tooltip: "Intricate Islamic decorative style with flowing floral and geometric patterns." },
  { label: "Celtic Art", tooltip: "Ancient knotwork, spirals, and zoomorphic designs from Celtic cultures." },
  { label: "Acrylic Painting", tooltip: "Fast-drying paint used for both opaque and transparent effects." },
  { label: "Futurism", tooltip: "Italian art movement glorifying speed, machinery, and modernity." },
  { label: "Byzantine Art", tooltip: "Religious mosaics and icons with gold backgrounds and flat perspectives." },
  { label: "Rorschach", tooltip: "Symmetrical inkblot patterns used in psychological testing." },
  { label: "Fauvism", tooltip: "Wild, unmixed colors and bold brushstrokes pioneered by Matisse and Derain." },
  { label: "Baroque", tooltip: "Dramatic, highly detailed style with rich ornamentation and movement." },
  { label: "Chalk", tooltip: "Dry medium art using textured chalk for loose sketching and shading." },
  { label: "Coloured Pencil", tooltip: "Layered pencil drawing with vibrant hues and precise detail." },
  { label: "Tie Dye", tooltip: "Fabric dyeing technique creating swirling rainbow patterns." },
  { label: "Kaleidoscopic", tooltip: "Repetitive, symmetrical patterns with vibrant, shifting colors." },
  { label: "Bubble Wrap", tooltip: "Texture mimicking plastic wrap with air-filled pockets." },
  { label: "Dark Fantasy", tooltip: "Grim, gothic worlds filled with horror, mystery, and supernatural elements." },
  { label: "Embroidery", tooltip: "Decorative needlework stitched onto fabric." },
  { label: "Cross Stitching", tooltip: "Counted-thread embroidery forming pixel-like patterns." },
  { label: "Sculpting", tooltip: "Three-dimensional art formed from clay, metal, or other materials." },
  { label: "GTA", tooltip: "Top-down pixelated game style from the classic Grand Theft Auto series." },
  { label: "Minecraft", tooltip: "Blocky voxel-based game aesthetic from the popular sandbox title." },
  { label: "Crayons", tooltip: "Waxy, colorful childlike drawings with visible texture." },
  { label: "Style of Edward Tingatinga", tooltip: "Tanzanian painting style with bold outlines and bright colors." },
  { label: "Style of Pablo Picasso", tooltip: "Cubist and abstract interpretation with fragmented forms and perspectives." },
  { label: "Wedha's Pop Art-Portrait Style", tooltip: "Bold, colorful pop art portraits with graphic influences." }
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

// Autocomplete Functions
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

  // New: Image Generation Button
  const generateImageBtn = document.getElementById("generate-image-btn");
  if (generateImageBtn) {
    generateImageBtn.addEventListener("click", generateImageFromPrompt);
  }
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

  const promptOutput = document.getElementById("prompt-output");
  promptOutput.value = promptParts.join(", ");
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

  renderArtStyleButtons();
  renderPagination();

  document.getElementById("generate-btn").addEventListener("click", generatePrompt);
  document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

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
    // Optional: First refine prompt using Gemini
    const refinedPrompt = await refinePromptWithGemini(promptOutput);

    // Then generate image using another service (e.g., DALL·E, SDXL)
    const imageUrl = await generateImageWithStableDiffusion(refinedPrompt || promptOutput);

    // Display the image
    imagePreview.src = imageUrl;
    imagePreview.style.display = "block";
    loadingText.style.display = "none";
  } catch (error) {
    alert("Failed to generate image: " + error.message);
    loadingText.style.display = "none";
  }
}

async function refinePromptWithGemini(prompt) {
  const apiKey = "AIzaSyCU05FsHsH1myXssYulUhJk54_3KSVaqxM"; // Replace with your actual key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [{ text: `Refine the following image prompt for better clarity and visual appeal:\n\n${prompt}` }]
      }]
    })
  });

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || prompt;
}

async function generateImageWithDallE(prompt) {
  const openaiApiKey = "YOUR_OPENAI_API_KEY";

  const response = await fetch("https://api.openai.com/v1/images/generations",  {
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

async function generateImageWithStableDiffusion(prompt) {
  const replicateApiKey = "YOUR_REPLICATE_API_KEY";

  const response = await fetch("https://api.replicate.com/v1/predictions",  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${replicateApiKey}`
    },
    body: JSON.stringify({
      version: "stability-ai/sdxl",
      input: {
        prompt,
        width: 1024,
        height: 1024,
        num_outputs: 1
      }
    })
  });

  const data = await response.json();
  const predictionId = data.id;

  // Poll until ready
  let result;
  while (true) {
    const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`,  {
      headers: { "Authorization": `Token ${replicateApiKey}` }
    });
    const pollData = await pollResponse.json();
    if (pollData.status === "succeeded") {
      result = pollData.output[0];
      break;
    } else if (pollData.status === "failed") {
      throw new Error("Image generation failed.");
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return result;
}
