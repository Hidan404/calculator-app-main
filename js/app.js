document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentNumber = '';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    document.querySelector('.delete-button').addEventListener('click', deleteLastCharacter);

    function deleteLastCharacter() {
        display.value = display.value.slice(0, -1);
        currentNumber = display.value;
    }
    

    function inputDigit(digit) {
        if (waitingForSecondOperand === true) {
            display.value = digit;
            waitingForSecondOperand = false;
        } else {
            display.value += digit;
        }
        currentNumber = display.value;
    }

    function inputDecimal(dot) {
        if (waitingForSecondOperand === true) return;
        if (!currentNumber.includes(dot)) {
            display.value += dot;
        }
        currentNumber = display.value;
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentNumber);
        if (operator && waitingForSecondOperand) {
            operator = nextOperator; // Troca o operador se outro operador for pressionado depois de "="
            return;
        }
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](firstOperand, inputValue);
            display.value = String(result);
            firstOperand = result;
        }
        waitingForSecondOperand = true;
        operator = nextOperator;
    }
    

    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand
    };

    function resetCalculator() {
        display.value = '';
        currentNumber = '';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
    }

    // Event listeners para os butões
    document.querySelectorAll('.keys button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                handleOperator(button.value);
            } else if (button.classList.contains('decimal')) {
                inputDecimal(button.value);
            } else if (button.classList.contains('clear')) {
                resetCalculator();
            } else {
                inputDigit(button.value);
            }
        });
    });
});

console.log("hidan")