const textInput = document.querySelector('#validation-input');
console.log(textInput.getAttribute("data-length"));
const length = textInput.getAttribute("data-length");
const lengthNum = Number(length);


textInput.addEventListener("blur", () => {
    console.log(textInput.value.length);
    const inputLength = textInput.value.length;
    if (inputLength === lengthNum) {
        textInput.classList.add("valid");
    }
    if (inputLength !== lengthNum) {
        textInput.classList.add("invalid");
    }
});