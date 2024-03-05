function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  input: document.querySelector("#countInput"),
  boxes: document.querySelector("#boxes"),
};

const { btnCreate, btnDestroy, input, boxes } = refs;

btnCreate.addEventListener("click", addBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function addBoxes(e) {
  boxes.innerHTML = "";
  if (input.value < 1 || input.value > 100) {
    input.value = "";
  }

  boxes.append(...createBoxes(input.value));
}

function destroyBoxes(e) {
  const arrOfBox = document.querySelectorAll(".boxe");
  for (const i of arrOfBox) {
    i.remove();
  }
}

function createBoxes(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("boxe");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${30 + i * 10}px`;
    box.style.width = `${30 + i * 10}px`;
    array.push(box);
  }
  return array;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const refs = {
//   input: document.querySelector("#countInput"),
//   btnCreate: document.querySelector("[data-create]"),
//   btnDestroy: document.querySelector("[data-destroy]"),
//   container: document.querySelector("#boxes"),
// };
// let arrayOfDiv = [];

// function createBoxes(event) {
//   const value = refs.input.value;
//   for (let i = 0; i < value; i++) {
//     arrayOfDiv.push(document.createElement("div"));
//     arrayOfDiv[i].classList.add('boxe');
//     arrayOfDiv[i].style.backgroundColor = getRandomHexColor();
//     arrayOfDiv[i].style.height = `${30 + i * 10}px`;
//     arrayOfDiv[i].style.width = `${30 + i * 10}px`;
//   }
//   refs.container.append(...arrayOfDiv);
//   refs.input.value = '';

// }

// function deleteBoxes(event) {
//   const boxes = document.querySelectorAll('.boxe');
//   boxes.forEach(box => {
//     box.remove();
//   })
//   arrayOfDiv = [];
//   console.log(boxes)

// }

// refs.btnCreate.addEventListener('click', createBoxes)
// refs.btnDestroy.addEventListener('click', deleteBoxes)

// const refs = {
//   input: document.querySelector('input'),
//   createBtn: document.querySelector('button[data-create]'),
//   container: document.getElementById("boxes")
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// function addSome(container, count) {
//   for (let i = 0; i < count; i++) {
//     const newElem = document.createElement("div");
//     newElem.innerText = "hello"
//     container.appendChild(newElem)
//   }
// }

// refs.createBtn.addEventListener('click', (e)=>{
//   addSome(refs.container, refs.input.value )
// })
