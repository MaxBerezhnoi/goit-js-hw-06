function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 

/*рабочий блок*/ 
/*const number = document.querySelector("input");
number.addEventListener("input", getAmountEvent);
function getAmountEvent(event) {
  getAmount();
}
let amount = 0;
function getAmount() {
  amount = Number(event.currentTarget.value);
  console.log(typeof(amount) + ":" + amount);
  return amount;
}*/
  
/*const buttonClick = document.querySelector("button");
buttonClick.addEventListener("click", createBoxes);
  
function createBoxes(amount) {
    for (let i = 0; i <= amount; i += 1) {

      const div = document.createElement("div");
      const boxes = document.querySelector("#boxes");
      boxes.append(div);
      console.log(boxes);
    }
  }*/
/*};*/


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

      

  
  

