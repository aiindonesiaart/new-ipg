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

// Populate Buttons
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

// Filter Buttons
function filterButtons(containerId, query) {
  const container = document.getElementById(containerId);
  const allButtons = container.querySelectorAll("button");

  const filtered = Array.from(allButtons).filter(btn =>
    btn.innerText.toLowerCase().includes(query.toLowerCase())
  );

  allButtons.forEach(btn => btn.style.display = "none");
  filtered.forEach(btn => btn.style.display = "inline-block");
}

// Select Button Logic
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

// Populate Dropdowns
function populateDropdown(id, options) {
  const select = document.getElementById(id);
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    select.appendChild(opt);
  });
}

// Add Tag
function addCustomTag(containerId, inputId) {
  const input = document.getElementById(inputId);
  const value = input.value.trim();
  if (value && !isTagExist(containerId, value)) {
    createTag(containerId, value);
    input.value = "";
  }
}

// Create Tag Element
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

// Check If Tag Exists
function isTagExist(containerId, text) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).some(tag => tag.textContent.includes(text));
}

// Populate Initial Elements
document.addEventListener("DOMContentLoaded", () => {
  populateButtons("angle-view-buttons", angleViews);
  populateButtons("art-style-buttons", artStyles);
  populateButtons("lighting-buttons", lightingTypes);
  populateDropdown("activity-select", activities);
  populateDropdown("background-select", backgrounds);

  document.getElementById("generate-btn").addEventListener("click", generatePrompt);
  document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// Generate Prompt
function generatePrompt() {
  // Get selections from each section
  const selectedAngles = getSelectedTexts("angle-view-buttons");
  const selectedArtStyles = getSelectedTexts("art-style-buttons");
  const character = document.getElementById("character").value.trim();
  const addedActivities = getAddedTags("added-activities");
  const selectedLightings = getSelectedTexts("lighting-buttons");
  const addedBackgrounds = getAddedTags("added-backgrounds");

  // Build prompt parts in desired order
  const promptParts = [];

  if (selectedAngles.length > 0) promptParts.push(selectedAngles.join(", "));
  if (selectedArtStyles.length > 0) promptParts.push(selectedArtStyles.join(", "));
  if (character) promptParts.push(character);
  if (addedActivities.length > 0) promptParts.push(addedActivities.join(", "));
  if (selectedLightings.length > 0) promptParts.push(selectedLightings.join(", "));
  if (addedBackgrounds.length > 0) promptParts.push(addedBackgrounds.join(", "));

  // Join all parts into a full prompt string
  const prompt = promptParts.join(", ");

  // Display the result
  document.getElementById("prompt-output").value = prompt;
}

// Copy to Clipboard
function copyToClipboard() {
  const output = document.getElementById("prompt-output");
  output.select();
  document.execCommand("copy");
  alert("Prompt copied!");
}

// Get Selected Texts
function getSelectedTexts(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".selected")).map(btn => btn.innerText);
}

// Get Added Tags
function getAddedTags(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll(".tag")).map(tag => tag.textContent.replace("×", "").trim());
}
