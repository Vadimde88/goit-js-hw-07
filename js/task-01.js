const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(item => {
    console.log(`
        -Категория: ${item.firstElementChild.textContent},
        -Количество элементов: ${item.lastElementChild.children.length}`);
});

//Можно и так))