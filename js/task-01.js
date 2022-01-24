const cats = document.querySelectorAll('li.item');
console.log(`Number of categories : ${cats.length}`);


cats.forEach(element => {
    const catTitle = element.querySelector('h2');
    const catEntries = element.querySelectorAll('li');



console.log(`Title of category : ${catTitle.textContent}`);
console.log(`Entries in category : ${catEntries.length}`);

});