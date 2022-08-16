const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const address = document.getElementById('address');
const phone = document.getElementById('phone');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get values from the inputs
    const usernameValue = username.value;
    const ageValue = age.value.trim();
    const addressValue = address.value;
    const phoneValue = phone.value.trim();

    // check and add error message || success message
    (usernameValue === '') ? setErrorFor(username, "يجب كتابة اسم المستخدم"): setSuccessFor(username);
    (ageValue === '') ? setErrorFor(age, "من فضلك ادخل عمرك"): setSuccessFor(age);
    (addressValue === '') ? setErrorFor(address, "من فضلك! ادخل العنوان"): setSuccessFor(address);
    (phoneValue === '') ? setErrorFor(phone, "من فضلك! ادخل رقم الهاتف"): setSuccessFor(phone);

};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add  error message inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

};