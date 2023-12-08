// Elements
const billTotalInput = document.getElementById('bill-total');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const customPercentTip = document.getElementById('custom-percent-tip');

// Tip buttons
const tipButtons = [
  document.getElementById('five-percent-tip'),
  document.getElementById('ten-percent-tip'),
  document.getElementById('fifteen-percent-tip'),
  document.getElementById('twenty-five-percent-tip'),
  document.getElementById('fifty-percent-tip'),
];

// Outputs
const tipPerPersonOutput = document.getElementById('tip-per-person');
const totalPerPersonOutput = document.getElementById('total-per-person');

// Error message
const errorMessage = document.getElementById('error-message');

// Reset Button
const btnReset = document.getElementById('btnReset');

// Regular Expression to check if the input is a valid number/floating-point number
function isNumeric(value) {
  return /^-?\d*\.?\d+$/.test(value);
}

// Event listener for tip buttons
tipButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    if (
      isNumeric(billTotalInput.value) &&
      isNumeric(numberOfPeopleInput.value) &&
      parseInt(numberOfPeopleInput.value) > 0
    ) {
      resetError(); // Reset error message
      tipCalculator(
        parseFloat(billTotalInput.value),
        (index + 1) * 5,
        parseInt(numberOfPeopleInput.value)
      );
    } else {
      displayError("can't be 0");
    }
  });
});

// Event listener for custom tip input
customPercentTip.addEventListener('input', function () {
  let customPercent = parseFloat(customPercentTip.value);
  if (
    isNumeric(billTotalInput.value) &&
    isNumeric(numberOfPeopleInput.value) &&
    !isNaN(customPercent) &&
    parseInt(numberOfPeopleInput.value) > 0
  ) {
    resetError(); // Reset error message
    tipCalculator(
      parseFloat(billTotalInput.value),
      customPercent,
      parseInt(numberOfPeopleInput.value)
    );
  } else {
    displayError('Number of people must be greater than 0.');
  }
});

btnReset.addEventListener('click', function () {
  resetFunction();
});

const resetFunction = () => {
  resetError(); // Reset error message
  billTotalInput.value = '';
  numberOfPeopleInput.value = '';
  customPercentTip.value = '';
  tipPerPersonOutput.innerHTML = '$0.00';
  totalPerPersonOutput.innerHTML = '$0.00';
};

// General Function: Calculate tip per person and total per person
const tipCalculator = (billTotal, tipPercent, numberOfPeople) => {
  let tipAmount = billTotal * (tipPercent / 100);
  let totalWithTip = billTotal + tipAmount;
  let totalPerPerson = totalWithTip / numberOfPeople;
  let tipPerPerson = tipAmount / numberOfPeople;

  if (!totalPerPerson || !tipPerPerson) return;

  tipPerPersonOutput.innerHTML = tipPerPerson.toFixed(2);
  totalPerPersonOutput.innerHTML = totalPerPerson.toFixed(2);
};

// Helper function to display error message
function displayError(message) {
  errorMessage.innerText = message;
  errorMessage.style.display = 'block';
}

// Helper function to reset error message
function resetError() {
  errorMessage.innerText = '';
  errorMessage.style.display = 'none';
}
