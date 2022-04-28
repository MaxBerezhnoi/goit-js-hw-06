function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



  function createBoxes(amount) {
    for (let i = 0; i <= amount; i += 1) {

      const div = document.createElement("div");
      const boxes = document.querySelector("#boxes");
      boxes.append(div);
    }
  }
  
const number = document.querySelector("input");
number.addEventListener("input", (event) => {
  let amount = event.currentTarget.value;
  console.log(amount);
  return amount;
})

  const buttonClick = document.querySelector("button");
  buttonClick.addEventListener("click", createBoxes);


  /*
      div.setAttribute(width, 30 + amount(i) * 10 +"px");
      div.setAttribute(heigth, 30 + amount(i) * 10 + "px");
      div.style.backgroundColor = getRandomHexColor();

  
  }*/

