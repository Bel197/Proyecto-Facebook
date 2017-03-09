var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');

if(email == undefined || email == null) {
  erroEmail.innerHTML = "El campo de email no puede estar en blanco";
}
