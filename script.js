const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let previousInput = '';

// Add event listeners for all buttons except clear
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;

        if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Clear button functionality
clearButton.addEventListener('click', function() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
});
