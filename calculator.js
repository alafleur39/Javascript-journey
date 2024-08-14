// Select the display and buttons
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-buttons button');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

// Function for updating the display
function updateDisplay(value) {
    display.value = value;
}

// Initialize the display
updateDisplay('0');

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        // Handle number buttons
        if (!isNaN(buttonText) || buttonText === '.') {
            currentInput += buttonText;
            updateDisplay(currentInput);
        }

        // Handle operator buttons
        if (['+', '-', '*', '/'].includes(buttonText)) {
            operator = buttonText;
            firstOperand = currentInput;
            currentInput = ''; // Clear current input for the next operand
        }

        // Handle the equals button
        if (buttonText === '=') {
            secondOperand = currentInput;

            // Perform the calculation
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    result = 'Error'; // In case of an unexpected operator
            }
            updateDisplay(result);
            currentInput = result.toString(); // Update current input to result
        }

        // Handle clear button
        if (buttonText === 'C') {
            currentInput = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            updateDisplay('0'); // Reset display to 0
        }
    });
});


// IT FUCKING WORKS !!!!
