function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#countInput"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};
const arrayOfDiv = [];


function createBoxes(event) {
  const value = refs.input.value;
  for (let i = 0; i < value; i++) {
    arrayOfDiv.push(document.createElement("div"));
    arrayOfDiv[i].classList.add('boxe');
    arrayOfDiv[i].style.backgroundColor = getRandomHexColor();
    arrayOfDiv[i].style.height = `${30 + i * 10}px`;
    arrayOfDiv[i].style.width = `${30 + i * 10}px`;
  }
  refs.container.append(...arrayOfDiv);
  refs.input.value = '';
  
}

function deleteBoxes(event) {
  
  refs.container.innerHTML = '';
}

refs.btnCreate.addEventListener('click', createBoxes)
refs.btnDestroy.addEventListener('click', deleteBoxes)
























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
