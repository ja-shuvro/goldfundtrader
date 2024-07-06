document.addEventListener("DOMContentLoaded", () => {
  let selector = document.querySelector(".checkeout-btn-grupe");
  let buttons = selector.querySelectorAll(".checkout-button");

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) => btn.classList.remove("active-button"));
      element.classList.add("active-button");
    };
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let selector = document.querySelector(".chalange-btn-grupe");
  let buttons = selector.querySelectorAll(".checkout-button");

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) => btn.classList.remove("active-button"));
      element.classList.add("active-button");
    };
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let selector = document.querySelector(".paltform-btn-grupe");
  let buttons = selector.querySelectorAll(".checkout-button");

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) => btn.classList.remove("active-button"));
      element.classList.add("active-button");
    };
  });
});
