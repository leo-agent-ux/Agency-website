const formEndpoint = "https://formspree.io/f/mlgoblln"; 
// 👆 replace this

let currentStep = 0;

let formData = {
type: "",
features: [],
budget: "",
description: ""
};

const steps = [
{
title: "What type of website?",
html: `
<label><input type="radio" name="type" value="Business"> Business Website</label>
<label><input type="radio" name="type" value="Ecommerce"> E-commerce</label>
<label><input type="radio" name="type" value="Portfolio"> Portfolio</label>
`
},
{
title: "Select features",
html: `
<label><input type="checkbox" value="Booking"> Booking System</label>
<label><input type="checkbox" value="Payments"> Payment System</label>
<label><input type="checkbox" value="Dashboard"> Admin Dashboard</label>
`
},
{
title: "Budget range",
html: `
<select id="budget">
<option>£500 - £1000</option>
<option>£1000 - £3000</option>
<option>£3000 - £10000+</option>
</select>
`
},
{
title: "Project description",
html: `
<textarea id="desc" placeholder="Describe your idea..." rows="5"></textarea>
`
},
{
title: "Final summary",
html: `
<div id="summary"></div>
<button class="btn" onclick="submitQuote()">Submit Request</button>
`
}
];

function renderStep(){
document.getElementById("stepContent").innerHTML =
`<h2>${steps[currentStep].title}</h2>` +
steps[currentStep].html;

updateProgress();

if(currentStep === steps.length - 1){
generateSummary();
}
}

function updateProgress(){
document.getElementById("progress").style.width =
((currentStep)/(steps.length-1))*100 + "%";
}

function nextStep(){
saveData();
if(currentStep < steps.length - 1){
currentStep++;
renderStep();
}
}

function prevStep(){
if(currentStep > 0){
currentStep--;
renderStep();
}
}

function saveData(){

// TYPE
let type = document.querySelector('input[name="type"]:checked');
if(type) formData.type = type.value;

// FEATURES
let features = [];
document.querySelectorAll('input[type="checkbox"]:checked')
.forEach(f => features.push(f.value));
formData.features = features;

// BUDGET
let budget = document.getElementById("budget");
if(budget) formData.budget = budget.value;

// DESCRIPTION
let desc = document.getElementById("desc");
if(desc) formData.description = desc.value;
}

function generateSummary(){
document.getElementById("summary").innerHTML = `
<h3>Summary</h3>
<p><b>Type:</b> ${formData.type}</p>
<p><b>Features:</b> ${formData.features.join(", ")}</p>
<p><b>Budget:</b> ${formData.budget}</p>
<p><b>Description:</b> ${formData.description}</p>
`;
}

function calculatePrice(){
let price = 0;

if(formData.type === "Business") price += 500;
if(formData.type === "Ecommerce") price += 1200;
if(formData.type === "Portfolio") price += 300;

formData.features.forEach(f=>{
if(f === "Booking") price += 400;
if(f === "Payments") price += 500;
if(f === "Dashboard") price += 600;
});

return price;
}

function submitQuote(){

saveData();

let estimatedPrice = calculatePrice();

fetch(formEndpoint, {
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({
type: formData.type,
features: formData.features,
budget: formData.budget,
description: formData.description,
estimatedPrice: "£" + estimatedPrice
})
});

alert("Quote sent successfully. We will contact you soon.");
}

renderStep();
