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

input.addEventListener("input", (e) => {
  let val = e.target;
  console.log(typeof val);
  if (val.value < 1 || val.value > 100) {
    val.value = "";
  }

  btnCreate.addEventListener("click", changeColor);
 22
});

function createBoxes(amount) {}

function changeColor(e) {
  console.log("1223");
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
