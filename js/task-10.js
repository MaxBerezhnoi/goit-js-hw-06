function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
const input = document.querySelector("#controls input");
      input.addEventListener("input", getAmountEvent);
      function getAmountEvent(event) {
        
        let amount = Number(event.currentTarget.value);
        
        input.setAttribute("x", amount);
        console.log(typeof (amount) + ":" + amount);
        return amount;
      }
    
  

/*buttons*/
const buttonClick = document.querySelectorAll("button");
buttonClick[0].addEventListener("click", createBoxes);
buttonClick[1].addEventListener("click", destroyBoxes);
/*buttons*/

/*destroy*/
function destroyBoxes() {
  const divs = document.querySelectorAll("#boxes div");
  for (const div of divs) {
    div.remove();
  }
}
/*destroy*/

/*create*/
  function createBoxes() {
    /*рабочий блок*/
    const getX = document.querySelector("input");
    let y = Number(input.getAttribute("x"));
      for (let i = 1; i <= y; i += 1) {
        const div = document.createElement("div");
        const boxes = document.querySelector("#boxes");
        boxes.append(div);
        div.style.width = 30 + i * 10 + "px";
        div.style.height = 30 + i * 10 + "px";
        div.style.backgroundColor = getRandomHexColor();
    
      }
    
}


