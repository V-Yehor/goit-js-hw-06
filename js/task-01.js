const listItem = document.querySelectorAll('.item');
console.log('Number of categories:', listItem.length);


listItem.forEach(el => {
    const category = el.querySelector('h2');
    console.log('Category:', category.textContent);
    // console.log(el);
    const categoryItem = el.querySelectorAll('li');
     console.log('Elements:', categoryItem.length);
 });