// lấy ra các phần tử
const dropdownButtonElement=document.querySelector(".dropdown__button");
const dropdownOverlayElement=document.querySelector('.dropdown__overlay');

dropdownButtonElement .addEventListener("click",function(){
    dropdownOverlayElement.classList.toggle("show");
    e.stopPropagation();
})
window.addEventListener("click",function(){
    if(dropdownOverlayElement.classList.contains("show")){
        dropdownOverlayElement.classList.remove("show");
    };
});

// propagation