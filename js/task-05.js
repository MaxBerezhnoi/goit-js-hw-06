let nameIn = document.querySelector("#name-input");
nameIn.addEventListener("input", inputChange);

let nameOut = document.querySelector("#name-output");

function inputChange(event) {
    
    if (nameIn.value !== "") {
        nameOut.textContent = event.currentTarget.value;
    }
    else {
        nameOut.textContent = "Anonymous";
    } 
}
