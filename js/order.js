// Toggle Delivery Address field
function toggleAddress(isDelivery) {
  const deliveryAddressField = document.getElementById('delivery-address');
  if (isDelivery) deliveryAddressField.classList.add('show');
  else deliveryAddressField.classList.remove('show');
}

// Toggle Credit Card Information fields
function togglePayment(isOnlinePayment) {
  const creditCardInfo = document.getElementById('credit-card-info');
  if (isOnlinePayment) creditCardInfo.classList.add('show');
  else creditCardInfo.classList.remove('show');
}

// Validate order form
function validateOrder() {
  var delivery = document.getElementById('delivery').checked;
  var postcode = document.getElementById('postcode').value;
  var name = document.getElementById('name').value;
  var order = document.getElementById('order').value;
  var billingAddress = document.getElementById('billing-address').value;
  var contactNumber = document.getElementById('contact-number').value;
  var email = document.getElementById('email').value;

  var errMsg = '';
  var result = true;
  var pattern = /^\d{4}$/;

  if (delivery) {
    // Check postcode only if delivery option is selected
    if (!postcode.match(pattern)) {
      errMsg += 'Postcode must be exactly 4 digits.\n';
    }
  }

  if (name == '') {
    errMsg += 'name cannot be empty.\n';
  }

  if (order == '') {
    errMsg += 'order cannot be empty.\n';
  }

  if (billingAddress == '') {
    errMsg += 'billing address cannot be empty.\n';
  }

  if (contactNumber == '') {
    errMsg += 'contact number cannot be empty.\n';
  }

  if (email == '') {
    errMsg += 'email cannot be empty.\n';
  }

  /* Display error message any error(s) is/are detected */
  if (errMsg != '') {
    alert(errMsg);
    result = false;
  }

  return result;
}

// Copy delivery address to billing address if filled out
function copyAddress() {
  const deliveryAddress = document.getElementById('address').value;
  const billingAddress = document.getElementById('billing-address');
  const sameAsDeliveryCheckbox = document.getElementById('same-as-delivery');

  if (sameAsDeliveryCheckbox.checked) {
    if (deliveryAddress === '') {
      alert('Please enter your delivery address first.');
      sameAsDeliveryCheckbox.checked = false;
      billingAddress.value = '';
    } else {
      billingAddress.value = deliveryAddress;
    }
  } else {
    billingAddress.value = '';
  }
}

// Adjust the length of credit card number field based on user selection
function updateCardNumberLength() {
  const cardTypeSelect = document.getElementById('card-type');
  const cardNumberInput = document.getElementById('card-number');

  // Get the selected card type
  const selectedCardType = cardTypeSelect.value;

  // Set the maxlength based on the selected card type
  if (selectedCardType === 'amex') {
    cardNumberInput.setAttribute('maxlength', '15');
  } else {
    cardNumberInput.setAttribute('maxlength', '16');
  }
}

function init() {
  var orderForm = document.getElementById('order-form');
  orderForm.onsubmit = validateOrder;
  updateCardNumberLength();
}

window.onload = init;
