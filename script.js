function calculate() {
  let type = parseInt(document.getElementById("type").value);
  let domain = parseInt(document.getElementById("domain").value);
  let extras = parseInt(document.getElementById("extras").value);

  let total = type + domain + extras;

  document.getElementById("result").innerText =
    "Estimated Price: £" + total;
}
