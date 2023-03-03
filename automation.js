let form = document.getElementById("form");

form.addEventListener("submit", calculateEstimate);

let calculateEstimate = (event) => {
  event.preventDefault();

  let total = 0;

  const postcode = form.getElementById("postcode").value;
  const windowNumber = form.getElementById("window-number").value;
  const gutters = form.getElementById("gutters").value;
  const conservatory = form.getElementById("conservatory").value;
  const fascias = form.getElementById("fascias").value;

  // radio buttons
  const weekly = form.getElementById("weekly").value;
  const monthly = form.getElementById("monthly").value;
  const biMonthly = form.getElementById("bi-monthly").value;
  const oneOffOrOther = form.getElementById("other-oneoff").value;

  if (postcode[3] === " " || postcode[3] === 0) {
    total += 3;
  } else if (postcode[2] < 3) {
    total += 5;
  } else {
    total += 8;
  }

  total += windowNumber;

  if (gutters) {
    total += 7;
  }
  if (conservatory) {
    total += 5;
  }
  if (fascias) {
    total += 6;
  }

  if (weekly) {
    total += 2;
  } else if (monthly) {
    total += 4;
  } else if (biMonthly) {
    total += 6;
  } else {
    total += 7;
  }
  form.style.display = "none";
  const afterSubmit = document.getElementById("after-submit");
  afterSubmit.style.display = "block";
  afterSubmit.innerText = `Our estimate for your window cleaning is £${total}. To confirm the quote and get your windows cleaned, don't hesitate to contact us. Alternatively, if you have left us your phone number, we will be in touch shortly!`;
};
