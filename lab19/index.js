// // const buttonElement = document.querySelector('#button');
// // buttonElement.addEventListener('click', function () {
// //     alert("Bạn đã bấm vào tôi rồi")
// // })
// let value = 0;
// // tạo 1 biến và gắn cho nó giá trị
// const buttonUpElement = document.querySelector('#up');
// const buttonDownElement = document.querySelector('#down');
// const valueElement = document.querySelector('#value');

// function updateValue() {
//     valueElement.textContent = value;
//     if (value == 0) {
//         buttonDownElement.disabled = true;
//     } else if (value == 10) {
//         buttonUpElement.disabled = true;
//     } else {
//         buttonDownElement.disabled = false;
//         buttonUpElement.disabled = false;
//     }
//     if (value >= 5) {
//         valueElement.classList.add('color');
//     } else {
//         valueElement.classList.remove("color")
//     }
// };
// buttonUpElement.addEventListener("click", function () {
//     value++;

//     updateValue();
// });
// buttonDownElement.addEventListener("click", function (evenObject) {
//     value--;
//     updateValue();

// });

// /// giá trị không thể giảm về âm
// // Nếu giá trị lớn hơn 5 thì text có màu xanh
// // Giá trị thì không thể lớn hơn 10


// const inputElement = document.querySelector('#username');
// inputElement.addEventListener("focus", function (e) {
//     console.log("Người dùng forcus vào thẻ input");
// });
// inputElement.addEventListener('blur', function (e) {
//     console.log("Ngươi dùng click ra ngoài input");
// });
// inputElement.addEventListener("keyPress", function (e) {
//     console.log("Người dùng bấm phím 1");
// });
// inputElement.addEventListener("input", function (e) {
//     console.log("Ký tự");
// });

const nameXEL = document.querySelector("#x");
const nameYEL = document.querySelector("#y");
const outPutElement = document.querySelector("#result");
const buttonEL=document.querySelector("add");
const formElement=document.querySelector("form");
// nameXEL.addEventListener("input", function (e) {
//     console.log(e);
// })
// nameYEL.addEventListener("input", function (e) {
//     console.log(e);
// });
// buttonEL.addEventListener("click",function(e){
//     const sum =0;
//     sum+= e;
//     return sum;
// })
let x,y;
nameXEL.addEventListener("input",function(e){
    x=Number(e.target.value);
});
nameYEL.addEventListener("input",function(e){
    y=Number(e.target.value);
});
outPutElement.addEventListener("click",function(e){
    // e.preventDefault(); // ngăn sự kiện click
    outPutElement.textContent = x+y;
});
// e viết tắt là evenobj
// thường dùng trên form hoặc thẻ| button
formElement.addEventListener("submit" ,function(e){
    e.preventDefault();
})