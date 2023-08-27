const inputValue = document.querySelector('#validation-input');

const inputLength = document.querySelector('input[data-length="6"]');

inputValue.addEventListener("input", event => {
    if (event.currentTarget.value.length !== Number(inputLength.dataset.length) || event.currentTarget.value.trim() === '') {
        inputValue.classList.remove("valid");
        inputValue.classList.add("invalid");
    } else {
        inputValue.classList.remove("invalid");
        inputValue.classList.add("valid");
    }
})



