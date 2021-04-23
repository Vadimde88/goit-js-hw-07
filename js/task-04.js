const ref = {
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    valueRef: document.querySelector('#value')

};

let counterValue = 0;
const render = () => {
    ref.valueRef.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    render();
};
const increment = () => {
    counterValue += 1;
    render();
};

ref.buttonDecrement.addEventListener('click', () => decrement());
ref.buttonIncrement.addEventListener('click', () => increment());