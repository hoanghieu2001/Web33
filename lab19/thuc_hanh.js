const boxesElement = document.querySelector('.boxes');
const totalboxesElement = document.querySelector("#score");
const btn = document.querySelector('#btn');
function updateBox() {
    totalboxesElement.textContent = boxesElement.children.length;
}
function createBox(color) {
    const box = document.createElement("div");
    box.classList.add(box);
    box.style.backgroundColor = color;

    box.addEventListener('click', function () {
        box.remove();   
        updateBox();
    });

    return box;
}

function renderBox(colors) {
    colors.forEach(function (color) {
        const box = createBox(color);

        boxesElement.append(box);
    });

    updateBox();
}

renderBox(colors);
btn.addEventListener('click', function (e) {
    renderBox(colors);
});