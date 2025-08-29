// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Part 1: JavaScript Basics - Variables, Conditionals
    const checkNumberBtn = document.getElementById('checkNumberBtn');
    checkNumberBtn.addEventListener('click', checkNumber);
    
    // Part 2: JavaScript Functions
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', performCalculations);
    
    // Part 3: JavaScript Loops
    const generateFactsBtn = document.getElementById('generateFactsBtn');
    generateFactsBtn.addEventListener('click', generateNumberFacts);
    
    // Part 4: DOM Manipulation
    const colorButtons = document.querySelectorAll('.control-btn[data-color]');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeColor(this.dataset.color);
        });
    });
    
    document.getElementById('toggleBtn').addEventListener('click', toggleVisibility);
    document.getElementById('addItemBtn').addEventListener('click', addItem);
    document.getElementById('resetBtn').addEventListener('click', resetBox);
    
    // Initialize with some facts
    generateNumberFacts();
});

// Part 1: JavaScript Basics - Variables, Conditionals
function checkNumber() {
    // Variable declaration
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('basicResult');
    
    // Get value and convert to number
    const number = Number(numberInput.value);
    
    // Input validation
    if (isNaN(number)) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a valid number!</span>';
        return;
    }
    
    // Conditional logic
    if (number % 2 === 0) {
        resultDiv.innerHTML = `The number ${number} is <strong>even</strong>.`;
        resultDiv.classList.add('even');
        resultDiv.classList.remove('odd');
    } else {
        resultDiv.innerHTML = `The number ${number} is <strong>odd</strong>.`;
        resultDiv.classList.add('odd');
        resultDiv.classList.remove('even');
    }
}

// Part 2: JavaScript Functions
function performCalculations() {
    // Get input values
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const resultDiv = document.getElementById('functionResult');
    
    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter valid numbers!</span>';
        return;
    }
    
    // Using multiple functions
    const sum = addNumbers(num1, num2);
    const product = multiplyNumbers(num1, num2);
    const quotient = divideNumbers(num1, num2);
    
    // Display results
    resultDiv.innerHTML = `
        <p>Sum: ${num1} + ${num2} = ${sum}</p>
        <p>Product: ${num1} × ${num2} = ${product}</p>
        <p>Quotient: ${num1} ÷ ${num2} = ${quotient}</p>
    `;
}

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to divide two numbers
function divideNumbers(a, b) {
    // Check for division by zero
    if (b === 0) return "Cannot divide by zero!";
    return (a / b).toFixed(2);
}

// Part 3: JavaScript Loops
function generateNumberFacts() {
    const input = document.getElementById('loopInput');
    const loopDemo = document.getElementById('loopDemo');
    const factsContainer = document.getElementById('factsContainer');
    const number = Number(input.value);
    
    // Input validation
    if (isNaN(number) || number < 1 || number > 20) {
        alert('Please enter a number between 1 and 20');
        return;
    }
    
    // Clear previous content
    loopDemo.innerHTML = '';
    factsContainer.innerHTML = '';
    
    // For loop to generate number boxes
    for (let i = 1; i <= number; i++) {
        const box = document.createElement('div');
        box.className = 'number-box';
        box.textContent = i;
        // Add class based on even/odd
        if (i % 2 === 0) {
            box.classList.add('even');
        } else {
            box.classList.add('odd');
        }
        loopDemo.appendChild(box);
    }
    
    // While loop to generate facts
    let count = 1;
    while (count <= number) {
        const factCard = document.createElement('div');
        factCard.className = 'fact-card';
        factCard.innerHTML = `<h3>Number ${count}</h3><p>${generateFact(count)}</p>`;
        factsContainer.appendChild(factCard);
        count++;
    }
}

// Function to generate a fact about a number
function generateFact(num) {
    const facts = [
        `It is ${num > 1 ? 'a composite' : 'neither prime nor composite'} number.`,
        `It is ${num % 2 === 0 ? 'even' : 'odd'} number.`,
        `Its square is ${num * num}.`,
        `Its square root is ${Math.sqrt(num).toFixed(2)}.`,
        `It is ${num < 10 ? 'a single-digit' : 'a double-digit'} number.`,
        `It is ${num === 7 ? 'lucky' : 'just a regular'} number.`,
        `It is ${num > 0 ? 'positive' : 'negative'} number.`
    ];
    
    // Return a random fact
    return facts[Math.floor(Math.random() * facts.length)];
}

// Part 4: DOM Manipulation
function changeColor(color) {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = `This box is now ${color}`;
}

function toggleVisibility() {
    const colorBox = document.getElementById('colorBox');
    if (colorBox.style.visibility === 'hidden') {
        colorBox.style.visibility = 'visible';
        colorBox.textContent = 'I am visible!';
    } else {
        colorBox.style.visibility = 'hidden';
    }
}

function addItem() {
    const itemContainer = document.getElementById('itemContainer');
    const itemCount = itemContainer.children.length + 1;
    const newItem = document.createElement('div');
    newItem.className = 'fact-card';
    newItem.textContent = `Dynamic Item #${itemCount} added via DOM`;
    itemContainer.appendChild(newItem);
}

function resetBox() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = '';
    colorBox.style.backgroundImage = 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)';
    colorBox.style.visibility = 'visible';
    colorBox.textContent = 'Interactive Box';
    
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.innerHTML = '';
}