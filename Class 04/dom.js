const magicButton = document.querySelector(".btn_inline")
const text = document.querySelector("h1");
const bodyEl = document.body;

function changeColors() {
    text.style.color = generateRandomColor();

    bodyEl.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return "#" + randomColor;
}

magicButton.addEventListener("click", changeColors);

 