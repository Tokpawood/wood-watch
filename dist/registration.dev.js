"use strict";

var form = document.querySelector("form");
var errorBox = document.getElementById("errorBox");

var soumissionForm = function soumissionForm(e) {
  e.preventDefault();
  var name = document.getElementById("name");

  if (name.value === "") {
    errorBox.innerText = "Veuillez entrer votre nom";
    return;
  }

  var password = document.getElementById("password");

  if (password.value === "") {
    errorBox.innerText = "Veuillez entrer votre mot de passe";
    return;
  }
};

form.addEventListener("submit", soumissionForm);