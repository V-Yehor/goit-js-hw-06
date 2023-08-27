let counterValue = 0;
const btnDecr = document.querySelector('#counter button[data-action="decrement"]');
const btnIncr = document.querySelector('#counter button[data-action="increment"');
const countValue = document.querySelector('#value');

btnDecr.addEventListener("click", () => {
    counterValue -= 1;
    countValue.textContent = counterValue;
});
btnIncr.addEventListener("click", () => {
    counterValue += 1;
    countValue.textContent = counterValue;
});