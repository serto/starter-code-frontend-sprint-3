// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');

//regular expresions
var soloChar = /\d+/g;
var validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var alphanum = /^[0-9a-zA-Z]+$/;
var soloNum = /^[0-9]*$/;

// Exercise 6
function validate(event) {
    // Validate fields entered by the user: name, phone, password, and email
    event.preventDefault();

    var noErrors = true;

    var nameForm = document.getElementById('name').value;
    var lastNameForm = document.getElementById('lastName').value;
    var emailForm = document.getElementById('email').value;
    var adressForm = document.getElementById('adress').value;
    var passForm = document.getElementById('password').value;
    var phoneForm = document.getElementById('phone').value;

    //validate name 
    var nameForm_validate = nameForm.match(soloChar);
    var groupName = document.getElementById('groupName');
    if ((nameForm_validate != null) || (nameForm.length <= 2)) {
        noErrors = false;
        groupName.classList.add('errorForm');
    } else {
        groupName.classList.remove('errorForm');
    }

    //validate last Name
    var lastNameForm_validate = lastNameForm.match(soloChar);
    var groupLastName = document.getElementById('groupLastName');
    if ((lastNameForm_validate != null) || (lastNameForm.length <= 2)) {
        noErrors = false;
        groupLastName.classList.add('errorForm');
    } else {
        groupLastName.classList.remove('errorForm');
    }

    //validate email
    var mail_validate = emailForm.match(validMail);
    var groupMail = document.getElementById('groupMail');
    if ((mail_validate == null) || (emailForm.length < 1)) {
        noErrors = false;
        groupMail.classList.add('errorForm');
    } else {
        groupMail.classList.remove('errorForm');
    }

    //validate adress
    var groupAdress = document.getElementById('groupAdress');
    if (adressForm.length <= 2) {
        noErrors = false;
        groupAdress.classList.add('errorForm');
    } else {
        groupAdress.classList.remove('errorForm');
    }

    //validate password
    var passwd_validate = passForm.match(alphanum);
    var groupPasswd = document.getElementById('groupPassword');
    if ((passwd_validate == null) || (passForm <= 2)) {
        noErrors = false;
        groupPasswd.classList.add('errorForm');
    } else {
        groupPasswd.classList.remove('errorForm');
    }

    //validate phone number
    var phone_validate = phoneForm.match(soloNum);
    var groupPhone = document.getElementById('groupPhone');
    if ((phone_validate == null) || (phoneForm.length <= 3)) {
        noErrors = false;
        groupPhone.classList.add('errorForm');
    } else {
        groupPhone.classList.remove('errorForm');
    }

    if (noErrors == true) {
        console.log('no errors');
    }
}