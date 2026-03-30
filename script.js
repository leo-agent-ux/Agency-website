// ===== GET ALL CHECKBOX VALUES =====
function getCheckedValues() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  let values = [];
  checkboxes.forEach(cb => values.push(cb.value));
  return values;
}

// ===== MAIN SUMMARY FUNCTION =====
function generateSummary() {

  // BASIC FIELDS
  let business = document.querySelector("input[name='business']").value;
  let industry = document.querySelector("input[name='industry']").value;
  let goal = document.querySelector("input[name='goal']").value;
  let website = document.querySelector("input[name='website']").value;

  let type = document.getElementById("type").value;
  let style = document.getElementById("style").value;
  let animations = document.getElementById("animations").value;

  let growth = document.getElementById("growth").value;
  let timeline = document.getElementById("timeline").value;
  let content = document.getElementById("content").value;

  let features = getCheckedValues();

  // ===== PRICE LOGIC =====
  let price = 500;

  // PROJECT TYPE
  if (type === "Business Website") price += 500;
  if (type === "E-commerce") price += 2000;
  if (type === "Booking System") price += 1500;
  if (type === "SaaS") price += 3000;
  if (type === "Portfolio") price += 300;
  if (type === "Landing Page") price += 200;

  // DESIGN LEVEL
  if (style === "Luxury & Premium") price += 700;
  if (style === "Bold & Modern") price += 400;

  // ANIMATIONS
  if (animations.includes("High")) price += 1000;
  if (animations.includes("Basic")) price += 300;

  // FEATURES COST
  features.forEach(f => {
    if (f.includes("Payments")) price += 400;
    if (f.includes("Booking")) price += 400;
    if (f.includes("Dashboard")) price += 800;
    if (f.includes("Login")) price += 600;
    if (f.includes("CMS")) price += 500;
    if (f.includes("SEO")) price += 300;
    if (f.includes("Analytics")) price += 200;
    if (f.includes("Automation")) price += 400;
    if (f.includes("WhatsApp")) price += 200;
    if (f.includes("Marketing")) price += 600;
    if (f.includes("Branding")) price += 500;
    if (f.includes("Logo")) price += 300;
    if (f.includes("Hosting")) price += 200;
    if (f.includes("Maintenance")) price += 300;
  });

  // CONTENT
  if (content === "I need help") price += 300;
  if (content === "I need full copywriting") price += 700;

  // TIMELINE
  if (timeline === "Rush") price += 800;

  // ===== COMPLEXITY =====
  let complexity = "LOW";

  if (price > 2000) complexity = "MEDIUM";
  if (price > 4000) complexity = "HIGH";

  // ===== SUMMARY TEXT =====
  let summary = `
Business: ${business}
Industry: ${industry}
Goal: ${goal}

Project Type: ${type}
Style: ${style}
Animations: ${animations}

Features:
${features.join(", ")}

Growth Focus: ${growth}
Timeline: ${timeline}
Content: ${content}

Existing Website: ${website || "None"}
`;

  // ===== DISPLAY =====
  document.getElementById("summaryText").innerText = summary;

  document.getElementById("priceEstimate").innerText =
    "Estimated Price: £" + price + "+";

  document.getElementById("complexity").innerText =
    "Project Complexity: " + complexity;

  // ===== SEND SUMMARY TO FORMSPREE =====
  let hidden = document.getElementById("finalSummary");
  if (!hidden) {
    hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "full_summary";
    hidden.id = "finalSummary";
    document.getElementById("quoteForm").appendChild(hidden);
  }

  hidden.value = summary + "\nPrice: £" + price + "+\nComplexity: " + complexity;
}
