// Write your solution in this file!

var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

const leastFavoriteCustomer = 'some customer';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer';
}