var userName = document.getElementById('name');
var email = document.getElementById('mail');
var pass1 = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
var form = document.querySelector('.left-box');


var fields = document.querySelectorAll('.field');

var minLengthUserName = 6;
var minLengthPass = 8;

//Спочатку якась літера, а потім будь який символ або цифра.
var regexUserName = new RegExp('^[A-Za-z]\\w*$');

//Спочатку літера, потім будь яка літера або цифри, потім собачка, а далі будь-яка літера
// і тоді крапка, потім знову будь-яка літера, і кінець.
var regexEmail = new RegExp('^[A-Za-z]\\w*@[A-Za-z]+.[A-Za-z]+$');

// для пароля буде три реджекси, щоб містив велику літеру, цифру, і маленьку літеру.
// цей вираз для великої літери
var regexPass1 = new RegExp('[A-Z]');
// цей вираз для цифри
var regexPass2 = new RegExp('\\d');
// цей вираз для маленької літери
var regexPass3 = new RegExp('[a-z]');

function createStandartError() {
  var error = document.createElement('div');
  error.className = 'error';
  error.style.fontSize = '12px';
  error.style.color = 'red';
  return error;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var errors = form.querySelectorAll('.error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  //check if is not blank
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank' + fields[i]);
      var error = createStandartError();
      error.innerHTML = fields[i].name + ' can\'t be blank';
      form[i].parentElement.insertBefore(error, fields[i]);
    } else if (fields[i].name == 'Username') {
      if (fields[i].value.length < minLengthUserName) {
        console.log('Username is too short' + fields[i]);
        var error = createStandartError();
        error.innerHTML = 'Min length username is ' + minLengthUserName;
        form[i].parentElement.insertBefore(error, fields[i]);
      } else if (!regexUserName.test(fields[i].value)) {
        console.log('Username don\'t match to regex' + fields[i]);
        var error = createStandartError();
        error.innerHTML = 'Name should start with digit and contain only digits and letters';
        form[i].parentElement.insertBefore(error, fields[i]);
      }
    } else if (fields[i].name == "Password") {
      if (fields[i].value.length < minLengthPass) {
        console.log('Password is too short' + fields[i]);
        var error = createStandartError();
        error.innerHTML = 'Min length password is ' + minLengthPass;
        form[i].parentElement.insertBefore(error, fields[i]);
      } else if (!(regexPass1.test(fields[i].value) && regexPass2.test(fields[i].value) && regexPass3.test(fields[i].value))) {
        console.log('Password don\'t match to regex' + fields[i]);
        var error = createStandartError();
        error.innerHTML = 'Password must contain at least one letter(upper and smaller) and one digit';
        form[i].parentElement.insertBefore(error, fields[i]);
      }
    } else if (fields[i].name == "Email") {
      if (!regexEmail.test(fields[i].value)) {
        console.log('Email don\' match to regex' + fields[i]);
        var error = createStandartError();
        error.innerHTML = 'Incorrect syntax for email';
        form[i].parentElement.insertBefore(error, fields[i]);
      }
    }
  }
  //check repeated password
  if (pass2.value != pass1.value) {
    console.log('Passwords don\'t match' + pass2);
    var error = createStandartError();
    error.innerHTML = 'Passwords don\'t match';
    pass2.parentElement.insertBefore(error, pass2);
  }
});