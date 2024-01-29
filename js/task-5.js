function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  color: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector('body')
};

function changeColorBackground(){
  refs.btnChangeColor.addEventListener('click', changeColorSpan)
  
}

function changeColorSpan(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = `${refs.body.style.backgroundColor}`

}

changeColorBackground();
