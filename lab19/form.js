// // const containerElement = document.querySelector('.container');
// const usernameElement = document.querySelector('#username');
// const passwordElement = document.querySelector('#password');
// const confirmElement = document.querySelector('#confirmPassword');

// const letuser = document.createElement('lable');
// const letpassword = document.createElement('label');
// const letconfirm = document.createElement('label')

// letuser.textcontent = "user";
// letpassword.textcontent="Password";
// letconfirm.textContent="ConfirmPassword";

// letuser.before(usernameElement);

const user = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmElement = document.querySelector("#confirmPassword");

const labeluser = document.createElement("label");
const labelpassword = document.createElement("label");
const labelconfirm = document.createElement("label");

labeluser.textContent = "Username";
labelpassword.textContent = 'Password';
labelconfirm.textContent = "confirmPassword";

user.before(labeluser);
password.before(labelpassword);
confirmElement.before(labelconfirm);


function checkPassword() {
    if (password.value !== confirmElement.value) {
        confirmElement.classList.add("red");
    } else {
        password.classList.add("green");
        confirmElement.classList.add("green");
        confirmElement.classList.remove("red");
    }
}

const btn = document.querySelector("#btn");

function validateInputs() {
    const nameValue = user.value.trim();
    const passwordValid = password.value.trim();
    const confirmValid = confirmElement.value.trim();

    const nameIsValid = !!nameValue;
    const passwordIsValid = passwordValid.length >= 8;
    const confirmIsValid = confirmValid.length >= 8;

    return nameIsValid && passwordIsValid && confirmIsValid;
}

function handleInputChange() {
    const inputsAreValid = validateInputs();
    if (!inputsAreValid) {
        btn.enable = false;
    } else {
        btn.disabled = false;
    }
}

user.addEventListener("input", handleInputChange);
password.addEventListener("input", handleInputChange);
confirmElement.addEventListener('input', function (e) {
    e.preventDefault();
    checkPassword();
    handleInputChange();
});

const hien = document.querySelectorAll(`.form - input button`);
console.log(hien);

function hienpassWord() {
    password.setAttribute("password", "text");
}

hien.addEventListener("click", hienpassWord());

// function checkPassword() {
//     if (password.value !== confirmElement.value) {
//         confirmElement.classList.add("red")
//     } else {
//         password.classList.add("green");
//         confirmElement.classList.add("green");
//         confirmElement.classList.remove("red");
//     }
// };
// const btn =document.querySelector("#btn");
// function validateInputs(){
//     const nameValue =user.value.trim();
//     const passwordValid=password.value.trim();
//     const confirmValid=confirm.value.trim();

//     const nameIsValid = !!nameIsValid;
//     const passwordIsValid =passwordValid.length>=8;
//     const confirmIsValid = confirmValid.length>=8;
//     return nameIsValid && passwordIsValid&& confirmIsValid;
// };
// function handleInputChange(){
//     const inputsAreValid=validateInputs();
// }