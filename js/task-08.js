const loginForm = document.querySelector(".login-form");
const user = {};

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const userEmail = form.elements.email.value;
    const userPass = form.elements.password.value;

    if (userEmail === "" || userPass === "") {
        alert('Всі поля повинні бути заповнені');
        return;
    } else {
        user.email = userEmail;
        user.password = userPass;
    }
    console.log(user);
    form.reset();
}
