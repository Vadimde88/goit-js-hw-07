const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(item => {
    console.log(`
        -Категория: ${item.querySelector('h2').textContent}
        -Количество элементов: ${item.querySelector('ul').children.length}`);
});