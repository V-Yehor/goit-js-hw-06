const inputControle = document.querySelector('#font-size-control');
console.log(inputControle);
const text = document.querySelector('#text');
console.log(text);

inputControle.addEventListener('input', event => {
    text.style.fontSize = event.currentTarget.value + 'px';
})
