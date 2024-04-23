let form = document.querySelector("form");
let errorBox = document.getElementById("errorBox");

let soumissionForm = (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  if (name.value === "") {
    errorBox.innerText = "Veuillez entrer votre nom";
    return;
  }
  let password = document.getElementById("password");
  if (password.value === "") {
    errorBox.innerText = "Veuillez entrer votre mot de passe";
    return;
  }
};
form.addEventListener("submit", soumissionForm);
