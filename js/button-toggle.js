document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".main-pricing-btn");

  // Add 'custom-button' class and remove specified classes from all buttons
  buttons.forEach((btn) => {
    btn.classList.add(
      "custom-button",
      "border-yellow-400",
      "dark:border-yellow-400"
    );
    btn.classList.remove(
      "text-blue-600",
      "hover:text-blue-600",
      "dark:text-blue-500",
      "dark:hover:text-blue-500",
      "border-blue-600",
      "dark:border-blue-500"
    );
  });

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) => btn.classList.remove("active-button"));
      element.classList.add(
        "active-button",
        "dark:border-yellow-400",
        "dark:text-white",
        "hover:text-white"
      );
      element.classList.remove("hover:text-blue-600");
    };
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".after-main-price-btn");

  // Add 'custom-button' class and remove specified classes from all buttons
  buttons.forEach((btn) => {
    btn.classList.add(
      "after-custom-button",
      "border-yellow",
      "dark:border-yellow"
    );
    btn.classList.remove(
      "text-blue-600",
      "hover:text-blue-600",
      "dark:text-blue-500",
      "dark:hover:text-blue-500",
      "border-blue-600",
      "dark:border-blue-500"
    );
  });

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) =>
        btn.classList.remove(
          "active-button",
          "dark:text-yellow-400",
          "text-white",
          "hover:text-white",
          "border-yellow-400",
          "dark:border-yellow-400"
        )
      );
      element.classList.add(
        "active-button",
        "dark:text-yellow-400",
        "text-white",
        "hover:text-white",
        "border-yellow-400",
        "dark:border-yellow-400"
      );
      element.classList.remove("hover:text-blue-600");
    };
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".silver-main-price-btn");

  // Add 'custom-button' class and remove specified classes from all buttons
  buttons.forEach((btn) => {
    btn.classList.add(
      "silver-custom-button",
      "border-yellow",
      "dark:border-yellow"
    );
    btn.classList.remove(
      "text-blue-600",
      "hover:text-blue-600",
      "dark:text-blue-500",
      "dark:hover:text-blue-500",
      "border-blue-600",
      "dark:border-blue-500"
    );
  });

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) =>
        btn.classList.remove(
          "active-button",
          "dark:text-yellow-400",
          "text-white",
          "hover:text-white",
          "border-yellow-400",
          "dark:border-yellow-400"
        )
      );
      element.classList.add(
        "active-button",
        "dark:text-yellow-400",
        "text-white",
        "hover:text-white",
        "border-yellow-400",
        "dark:border-yellow-400"
      );
      element.classList.remove("hover:text-blue-600");
    };
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".gold-main-price-btn");

  // Add 'custom-button' class and remove specified classes from all buttons
  buttons.forEach((btn) => {
    btn.classList.add(
      "gold-custom-button",
      "border-yellow",
      "dark:border-yellow"
    );
    btn.classList.remove(
      "text-blue-600",
      "hover:text-blue-600",
      "dark:text-blue-500",
      "dark:hover:text-blue-500",
      "border-blue-600",
      "dark:border-blue-500"
    );
  });

  // Set up click event handler for each button
  buttons.forEach((element) => {
    element.onclick = () => {
      buttons.forEach((btn) =>
        btn.classList.remove(
          "active-button",
          "dark:text-yellow-400",
          "text-white",
          "hover:text-white",
          "border-yellow-400",
          "dark:border-yellow-400"
        )
      );
      element.classList.add(
        "active-button",
        "dark:text-yellow-400",
        "text-white",
        "hover:text-white",
        "border-yellow-400",
        "dark:border-yellow-400"
      );
      element.classList.remove("hover:text-blue-600");
    };
  });
});
