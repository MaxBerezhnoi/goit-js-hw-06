const font = document.querySelector("#font-size-control");
font.addEventListener("input", (event) => {
    const text = document.querySelector("#text");
        text.style.fontSize = font.value + "px";
});

