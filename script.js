const emailLabel = document.getElementById("email-label");
const emailInput = document.getElementById("email-input");
const passwordLabel = document.getElementById("password-label");
const passwordInput = document.getElementById("password-input");

emailInput.addEventListener("click", () => {
  moveLabel(emailLabel);
});
passwordInput.addEventListener("click", () => {
  moveLabel(passwordLabel);
});
document.addEventListener("click", displayDown);

function moveLabel(element) {
  //   Isoler lettres
  let text = element.innerText;
  let letters = [];

  letters = text.split("");

  // Vider label
  element.innerHTML = "";

  // Mettre chaque lettre dans span
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    element.appendChild(span);
  });

  // Transition
  setTimeout(displayUp, 10);
}

function displayUp() {
  const allSpans = document.querySelectorAll("span");
  let delay = 0;

  allSpans.forEach((el) => {
    el.style.transition = `all 0.1s ease-out ${delay}ms`;
    el.classList.add("up");
    delay += 50;
    console.log("allspans");
  });
}

function displayDown() {
  const allSpans = document.querySelectorAll("span");
  allSpans.forEach((el) => {
    el.classList.remove("up");
  });
}
