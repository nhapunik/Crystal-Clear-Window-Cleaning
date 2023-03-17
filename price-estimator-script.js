let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let total = 0;

  const postcode = document.getElementById("postcode").value;
  const windowNumber = document.getElementById("window-number").value;
  const gutters = document.getElementById("gutters").checked;
  const conservatory = document.getElementById("conservatory").checked;
  const fascias = document.getElementById("fascia").checked;

  // radio buttons
  const weekly = document.getElementById("weekly").checked;
  const monthly = document.getElementById("monthly").checked;
  const biMonthly = document.getElementById("bi-monthly").checked;
  const oneOffOrOther = document.getElementById("other-oneoff").checked;

  if (postcode[3] === " " || postcode[3] === 0) {
    total += 3;
  } else if (postcode[2] < 3) {
    total += 5;
  } else {
    total += 8;
  }
  console.log(total);

  if (postcode[0] !== ("E" || "e") || postcode[1] !== ("H" || "h")) {
    alert("Sorry, only EH poscodes accepted, please enter a valid postcode");
    // getElementById('submit'). render incative
    form.removeEventListener("submit");
  }

  total += Number(windowNumber);

  console.log(total);

  if (gutters) {
    total += 7;
  }
  console.log(total);
  if (conservatory) {
    total += 5;
  }
  console.log(total);
  if (fascias) {
    total += 6;
  }
  console.log(total);
  if (weekly) {
    total += 2;
  } else if (monthly) {
    total += 4;
  } else if (biMonthly) {
    total += 6;
  } else {
    total += 7;
  }
  console.log(total);
  form.style.display = "none";
  const afterSubmit = document.getElementById("after-submit");
  afterSubmit.style.display = "block";
  console.log(total);
  document.querySelector("h2").innerText = "Thank you for submitting!";
  afterSubmit.innerText = `Our estimate for your window cleaning is £${total}. To confirm the quote and get your windows cleaned, don't hesitate to contact us. Alternatively, if you have left us your phone number, we will be in touch shortly!`;
  const contact = document.getElementById("contact");
  contact.style.display = "block";
});
