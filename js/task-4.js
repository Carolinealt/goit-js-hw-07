const form = document.querySelector(".login-form");
const refs = {
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
};
const dataForm = {
  email: null,
  password: null,
};
form.addEventListener("submit", sendForm);
function sendForm(e) {
  e.preventDefault();
  if (refs.email.value.trim() === "" || refs.password.value.trim() === "") {
    window.alert("All form fields must be filled in");
    return;
  }
  
  dataForm.email = e.target.elements.email.value;
  dataForm.password = e.target.elements.password.value;
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();

//   const emailValue = event.currentTarget.elements.email.value;
//   const passwordValue = event.currentTarget.elements.password.value;

//   if (emailValue === "" || passwordValue === "") {
//     window.alert("All form fields must be filled in");
//     return;
//   }

//   const formData = new FormData(event.currentTarget);

//   // formData.forEach((value, name) => {
//   //   console.log({ name, value });
//   // });
//   form.reset();
// }
