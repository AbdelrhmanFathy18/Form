"use strict";

var form = document.getElementById('form');
var username = document.getElementById('username');
var age = document.getElementById('age');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get values from the inputs
  var usernameValue = username.value;
  var ageValue = age.value.trim();
  var addressValue = address.value;
  var phoneValue = phone.value.trim(); // check and add error message || success message

  usernameValue === '' ? setErrorFor(username, "يجب كتابة اسم المستخدم") : setSuccessFor(username);
  ageValue === '' ? setErrorFor(age, "من فضلك ادخل عمرك") : setSuccessFor(age);
  addressValue === '' ? setErrorFor(address, "من فضلك! ادخل العنوان") : setSuccessFor(address);
  phoneValue === '' ? setErrorFor(phone, "من فضلك! ادخل رقم الهاتف") : setSuccessFor(phone);
}

;

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small'); // add  error message inside small

  small.innerText = message; // add error class

  formControl.className = 'form-control error';
}

;

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

;