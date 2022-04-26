let counterValue = 0;
const buttonDec = document.querySelector('[data-action = "decrement"]');
buttonDec.addEventListener("click", () => {
    counterValue -= 1;
    const value1 = document.querySelector("#value");
value1.textContent = counterValue;
});
const buttonInc = document.querySelector('[data-action = "increment"]');
buttonInc.addEventListener("click", () => {
    counterValue += 1;
    const value1 = document.querySelector("#value");
value1.textContent = counterValue;
});

