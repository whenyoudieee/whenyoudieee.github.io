var submit = document.getElementById('submit');
var email = document.getElementById('mail');
var fields = document.querySelectorAll('.field');
var form = document.querySelector('.left-box');

var minLengthPass = 8;
var minLegnthEmail = 6;

form.addEventListener('submit', function (event) {
  event.preventDefault()
  var errors = form.querySelectorAll('.error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i].name);
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = fields[i].name + ' can\'t be blank';
      form[i].parentElement.insertBefore(error, fields[i]);
    } else if (fields[i].name == "Password" && fields[i].value.length < minLengthPass) {
      console.log('field is too short(min length ' + minLengthPass + ' symbols)', fields[i].name);
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = fields[i].name + ' can\'t have length ' + fields[i].value.length + '\nMin length: ' + minLengthPass + ' symbols';
      form[i].parentElement.insertBefore(error, fields[i]);
    } else if (fields[i].name == "Email" && fields[i].value.length < minLegnthEmail) {
      console.log('field is too short(min length ' + minLegnthEmail + ' symbols)', fields[i].name);
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = fields[i].name + ' can\'t have length ' + fields[i].value.length + '\nMin length: ' + minLegnthEmail + ' symbols';
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
});