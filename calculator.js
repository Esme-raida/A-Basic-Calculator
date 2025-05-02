//GETTING THE ELEMENTS INTO JAVASCRIPT
const buttons = document.querySelector('.buttons');
const numberButtons = document.querySelectorAll('.num-btns');
let display = document.getElementById('display');
const operatorButtons = document.querySelectorAll('.operator-btns');
const clearButton = document.querySelector('.clear-btn');
const backspaceBtn = document.querySelector('.backspace-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const syncButton = document.querySelector('.sync-btn');
const extraRow = document.querySelector('.extra-btn-rows');
const extraColumn = document.querySelectorAll('.extra-btn-column');
const mainCalculator = document.querySelector('.main-calculator');


//NUMBER BUTTONS FUNCTIONALITY
numberButtons.forEach(btnElement => {
    btnElement.addEventListener('click', () => {
        const btnValue = btnElement.textContent;
        display.value += btnValue;

    });
});

//OPERATOR BUTTONS FUNCTIONALITY AND EVALUATION FUNCTIONALITY 
operatorButtons.forEach(operatorElement  => {
    operatorElement.addEventListener('click', () => {
        const operator = operatorElement.dataset.value;
        if (operator !== '=') { 
            display.value += operator;
        } else {
            try{
                //Using eval to evaluate the expression in the display
            const result = eval(display.value);
            display.value = '';
            display.value += result;
            } catch(error) {
                //If the expression is invalid, show an error message
                display.value = 'Invalid Expression!';
                setTimeout(() => {
                    display.value = '';
                }, 2000); // Clear the display after 2 seconds
            }
        }
    });
});

//CLEAR BUTTON FUNCTIONALITY

clearButton.addEventListener('click', () => {
    display.value = '';
});

backspaceBtn.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    console.log(display.value);
});

//TOGGLE BUTTON FUNCTIONALITY

function updateMode() {
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        display.style.backgroundColor = 'white';
        display.style.color = 'black';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        display.style.backgroundColor = 'black';
        display.style.color = 'white';

    };
};

//When the toggle button is clicked

toggleBtn.addEventListener('click', () => {
    //I can use toggle instead of writing if/else
    document.body.classList.toggle('dark-mode');
    updateMode();
    });

//When the page is loaded
document.addEventListener('DOMContentLoaded', updateMode);

//KEYBOARD FUNCTIONALITY

document.addEventListener('keydown', (event) => {
    const key = event.key;
//     const validOperators = ['+', '-', '*', '/', '%'];

//     if (key >= 0 && key <= 9) {
//         display.value += key;
//     } else if (validOperators.includes(key)) {
//         display.value += key;
//     }
// });
//NOT USING THE ABOVE CODE AS IT IS NOT WORKING FOR ALL KEYS

        //TO HANDLE SPECIAL KEYS
    if (key === 'Enter') {
        try{
            const result = eval(display.value);
            display.value = '';
            display.value += result;
        } catch(error) {
            display.value = 'Invalid Expression!';
            setTimeout(() => {
                display.value = '';
            }, 2000); // Clear the display after 2 seconds
        }
    } else if (key === 'Backspace') {
        backspaceBtn.click();
    } else if (key === 'Escape') {
        clearButton.click();
    }
});