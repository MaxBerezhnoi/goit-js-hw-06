function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonChange = document.querySelector("button.change-color");
buttonChange.addEventListener("click", bodyColor);
function bodyColor() {
  const bodyOfDoc = document.querySelector("body");
  bodyOfDoc.style.backgroundColor = getRandomHexColor();
  const bgColor = document.querySelector("span.color");
  
  bgColor.textContent = bodyOfDoc.getAttribute("style");
  
}
