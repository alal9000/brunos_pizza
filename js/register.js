// Registration form validation
function validateRegister() {
  var email = document.getElementById('email').value;
  var username = document.getElementById('uname').value;
  var password = document.getElementById('password').value;
  var genm = document.getElementById('male').checked;
  var genf = document.getElementById('female').checked;

  // validation for checkboxes
  var pizzaOptions = document.querySelectorAll('input[name="favorite-item"]');
  var pizzaSelected = false;

  pizzaOptions.forEach(function (pizza) {
    if (pizza.checked) {
      pizzaSelected = true; // Set to true if at least one pizza is selected
    }
  });

  var errMsg = '';
  var result = true;
  var pattern = /^.{9,}$/;

  // check for empty fields
  if (email == '') {
    errMsg += 'email cannot be empty.\n';
  }

  if (username == '') {
    errMsg += 'username cannot be empty.\n';
  }

  if (password == '') {
    errMsg += 'password cannot be empty.\n';
  }

  if (!password.match(pattern)) {
    errMsg += 'password must be at least 9 characters.\n';
  }

  if (genm == '' && genf == '') {
    errMsg += 'A gender must be selected.\n';
  }

  if (!pizzaSelected) {
    errMsg += 'At least one pizza must be selected.\n';
  }

  // Display error message if any erroris detected
  if (errMsg != '') {
    alert(errMsg);
    result = false;
  }

  return result;
}

function init() {
  var regForm = document.getElementById('regform');
  regForm.onsubmit = validateRegister;
}

window.addEventListener('load', init);
