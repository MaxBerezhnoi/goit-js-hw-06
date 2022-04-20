const numberOfCategories = document.querySelectorAll('li.item').length;
console.log('Number of Categories:', numberOfCategories);

const catEls = document.querySelectorAll('li.item');
for (const catEl of catEls) {
    const category = catEl.querySelector("h2")
    console.log("Category:", category.textContent);
    const numberOfEl = catEl.querySelectorAll('li').length;
    console.log("Elements:", numberOfEl);
}