// const imagelElement=document.querySelectorAll('.show__modal');
// const modalElement =document.querySelector(".modal");
// const closeElement =document.querySelector('.modal__close');
// const modalImage=modalElement.querySelector("modal__image");
// const modalText =modalElement.querySelector(".modal__text")
// imagelElement.addEventListener("click", function(){
//     modalElement.classList.add("show");
// });
// closeElement.addEventListener("click",function(){
//     modalElement.classList.remove("show");
// });
// imagelElement.forEach(function(imagelElement){
//     imagelElement.addEventListener("click",function(){
//         modalElement.classList.add("show");

//         modalImage.src =imagelElement.src;
//         modalImage.alt= imagelElement.alt;
//         modalElement.textContent = imagelElement.alt;
//     });
// });
// closeElement.addEventListener("click",function(){
//     modalElement.classList.remove("show");
// });


const modalCloseElement = document.querySelector(".modal__close");
const modalImageElement = document.querySelector(".modal__image");

modalImageElement.addEventListener("click", function () {
    const lEL=document.modalImageElement;
    modalImageElement.classList.add("show")
})
modalCloseElement.addEventListener("click", function () {
    modalImageElement.classList.add("close")


});
