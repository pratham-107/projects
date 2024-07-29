// Get all the elements
const calculator = document.querySelector('.calculator');
const output = document.querySelector('.output');
const prevDisplay = document.querySelector('.prev-display');
const currDisplay = document.querySelector('.curr-display');
const buttons = document.querySelectorAll('button');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let currentOperation = '';

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    const buttonClass = e.target.classList[0];

    // Handle number buttons
    if (buttonClass === 'number') {
      handleNumberButton(buttonText);
    }
    // Handle operation buttons
    else if (buttonClass === 'operation') {
      handleOperationButton(buttonText);
    }
    // Handle clear button
    else if (buttonClass === 'clear') {
      handleClearButton();
    }
    // Handle delete button
    else if (buttonClass === 'delete') {
      handleDeleteButton();
    }
    // Handle equal button
    else if (buttonClass === 'equal') {
      handleEqualButton();
    }
  });
});

// Handle number button click
function handleNumberButton(number) {
  if (currentNumber === '0' && number === '0') return;
  if (currentNumber.includes('.') && number === '.') return;
  currentNumber += number;
  currDisplay.textContent = currentNumber;
}

// Handle operation button click
function handleOperationButton(operation) {
  if (currentNumber === '') return;
  if (previousNumber!== '') {
    handleEqualButton();
  }
  previousNumber = currentNumber;
  currentOperation = operation;
  currentNumber = '';
  prevDisplay.textContent = `${previousNumber} ${currentOperation}`;
  currDisplay.textContent = '';
}

// Handle clear button click
function handleClearButton() {
  currentNumber = '';
  previousNumber = '';
  currentOperation = '';
  prevDisplay.textContent = '';
  currDisplay.textContent = '';
}

// Handle delete button click
function handleDeleteButton() {
  currentNumber = currentNumber.slice(0, -1);
  currDisplay.textContent = currentNumber;
  if (currentNumber === '') {
    currDisplay.textContent = '0';
  }
}

// Handle equal button click
function handleEqualButton() {
  if (currentNumber === '' || previousNumber === '') return;
  let result = 0;
  switch (currentOperation) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      if (currentNumber === '0') {
        alert('Cannot divide by zero!');
        return;
      }
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  prevDisplay.textContent = '';
  currDisplay.textContent = currentNumber;
  previousNumber = '';
  currentOperation = '';
}