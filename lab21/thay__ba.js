const dropdownButtonElement = document.querySelector(".dropdown__button");
const dropdownOverlayElement = document.querySelector(".dropdown__overlay");

dropdownButtonElement.addEventListener("click", function (e) {
    e.stopPropagation();

    dropdownOverlayElement.classList.toggle("show");
});

window.addEventListener("click", function () {
    if (dropdownOverlayElement.classList.contains("show")) {
        dropdownOverlayElement.classList.remove("show");
    }
});

const imagesElement = document.querySelectorAll(".show__modal");
const modalElement = document.querySelector(".modal");
const closeElement = modalElement.querySelector(".modal__close");
const modalImage = modalElement.querySelector(".modal__image");
const modalText = modalElement.querySelector(".modal__text");

imagesElement.forEach(function (imageElement) {
    imageElement.addEventListener("click", function () {
        modalElement.classList.add("show");

        modalImage.src = imageElement.src;
        modalImage.alt = imageElement.alt;
        modalText.textContent = imageElement.alt;
    });
});

closeElement.addEventListener("click", function () {
    modalElement.classList.remove("show");
});

const navElement = document.querySelector(".nav");

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navElement.classList.add("shrink");
    } else {
        navElement.classList.remove("shrink");
    }
});

const images = [
    {
        src: "https://cdn-images.imagevenue.com/8f/f5/40/ME14MUQS_o.jpg",
        text: "Girl xinh 1"
    },
    {
        src: "https://pbs.twimg.com/media/FPfkuLLUYAA7uUH?format=jpg&name=large",
        text: "Girl xinh 2"
    },
    {
        src: "https://gaixinh.photo/wp-content/uploads/2022/03/gai-dep-vn.jpg",
        text: "Girl xinh 3"
    }
];

const buttonNextElement = document.querySelector(".carousel__button--next");
const buttonPrevElement = document.querySelector(".carousel__button--prev");
const carouselItemElement = document.querySelector(".carousel__item");
const carouselImageElement = carouselItemElement.querySelector(
    ".carousel__image"
);
const carouselTextElement = carouselItemElement.querySelector(
    ".carousel__text"
);

function showCarouselItem(index) {
    const item = images[index];

    carouselImageElement.src = item.src;
    carouselTextElement.textContent = item.text;
}

let currentIndex = 0;

showCarouselItem(currentIndex);

buttonNextElement.addEventListener("click", function (e) {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    showCarouselItem(currentIndex);
});

buttonPrevElement.addEventListener("click", function (e) {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }

    showCarouselItem(currentIndex);
});
