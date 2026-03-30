const steps = [
{
title: "What type of website do you need?",
html: `
<label><input type="radio" name="type" value="Business"> Business Website</label>
<label><input type="radio" name="type" value="Ecommerce"> E-commerce</label>
<label><input type="radio" name="type" value="Portfolio"> Portfolio</label>
`
},
{
title: "What features do you need?",
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
title: "Tell us about your project",
html: `
<textarea id="desc" placeholder="Describe your idea..." rows="5"></textarea>
`
},
{
title: "Ready to send",
html: `
<p>Click submit to send your request to StudioX.</p>
<button class="btn" onclick="submitQuote()">Submit Request</button>
`
}
];

let currentStep = 0;

function renderStep(){
document.getElementById("stepContent").innerHTML =
`<h2>${steps[currentStep].title}</h2>` +
steps[currentStep].html;

document.getElementById("progress").style.width =
((currentStep) / (steps.length - 1)) * 100 + "%";
}

function nextStep(){
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

function submitQuote(){
alert("Quote sent! We will contact you soon.");
}

renderStep();
