const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (const ingredient of ingredients) {
  const link = document.createElement("li");
  link.textContent = ingredient;
  link.classList.add("item");
  console.log(link);
  const list = document.querySelector("ul");
  list.appendChild(link);
}
