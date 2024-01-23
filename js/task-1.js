const categoriesList  = document.querySelector('#categories');

const categoriesNameItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesNameItem.length}`);
categoriesNameItem.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
})
