// CREDIT CARD INPUT MASKING
var InputMask = require('inputmask');

var creditCardInput = document.getElementById('credit-card-input');

if (creditCardInput) {
  var im = new InputMask("9999 9999 9999 9999");
  im.mask(creditCardInput);
}

