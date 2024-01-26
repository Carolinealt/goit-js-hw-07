const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;

  if (emailValue === "" || passwordValue === "") {
    window.alert("All form fields must be filled in");
  }
  console.log(event.currentTarget);
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log({name, value});


  });
  form.reset();
}
