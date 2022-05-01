const numberOfCategories = document.querySelectorAll('li.item').length;
console.log('Number of Categories:', numberOfCategories);

const catEls = document.querySelectorAll('li.item');

const list = catEls.forEach((catEl) => {
    const category = catEl.querySelector("h2")
    console.log("Category:", category.textContent);
    const numberOfEl = catEl.querySelectorAll('li').length;
    console.log("Elements:", numberOfEl);
});
console.log(list);
