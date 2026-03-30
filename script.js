// ===== GET CHECKBOX VALUES =====
function getCheckedValues() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  let values = [];
  checkboxes.forEach(cb => values.push(cb.value));
  return values;
}

// ===== PRICE ENGINE (AGENCY VERSION) =====
function calculatePrice(type, style, animations, features, content, timeline) {

  let price = 500;

  // TYPE
  const typePrices = {
    "Business Website": 500,
    "E-commerce": 2000,
    "Booking System": 1500,
    "SaaS": 3000,
    "Portfolio": 300,
    "Landing Page": 200
  };

  price += typePrices[type] || 0;

  // STYLE
  if (style === "Luxury & Premium") price += 700;
  if (style === "Bold & Modern") price += 400;

  // ANIMATIONS
  if (animations === "Basic animations") price += 300;
  if (animations === "High-end smooth animations") price += 1000;

  // FEATURES
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

  return price;
}

// ===== MAIN FUNCTION =====
function generateSummary() {

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

  let price = calculatePrice(type, style, animations, features, content, timeline);

  let complexity = "LOW";
  if (price > 2000) complexity = "MEDIUM";
  if (price > 4000) complexity = "HIGH";

  let summary = `
Business: ${business}
Industry: ${industry}
Goal: ${goal}

Type: ${type}
Style: ${style}
Animations: ${animations}

Features: ${features.join(", ")}

Growth: ${growth}
Timeline: ${timeline}
Content: ${content}

Website: ${website || "None"}
`;

  document.getElementById("summaryText").innerText = summary;
  document.getElementById("priceEstimate").innerText = "Estimated Price: £" + price + "+";
  document.getElementById("complexity").innerText = "Complexity: " + complexity;

  // hidden field for Formspree
  let hidden = document.getElementById("finalSummary");

  if (!hidden) {
    hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "full_summary";
    hidden.id = "finalSummary";
    document.getElementById("quoteForm").appendChild(hidden);
  }

  hidden.value =
    summary +
    "\nPrice: £" + price +
    "\nComplexity: " + complexity;
}
