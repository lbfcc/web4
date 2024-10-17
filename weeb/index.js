/*1*/
function image_change1(){
    let image = document.getElementById('img_1');
    image.src = "nety.png";
}

function image_change2(){
    let image = document.getElementById('img_1');
    image.src = "est.png";
}

function cahnge_background(){
    let body = document.body;
    body.style.backgroundColor = "lightgray";
}

function showAlert(){
    alert("Hello!");
}

/*2*/
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim(); 

    if (taskValue === "") {
        alert("You have to write something!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);

    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    taskInput.value = "";
}

/*3*/
function sortNums(order) {
    let input = document.getElementById('numberInput').value;
    let sortedNumbersContainer = document.getElementById('sortedNumbers');

    let numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        sortedNumbersContainer.innerHTML = "Write numbers.";
        return;
    }

    if (order === 'asc') {
        numbers.sort(function(a,b){return a - b});
    } else {
        numbers.sort(function(a,b){return b - a});
    }

    sortedNumbersContainer.innerHTML = numbers.join(', ');
}

/*4*/
function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num_1').value);
    let num2 = parseFloat(document.getElementById('num_2').value);
    let answer = 0;

    if (operation === '+') {
        answer = num1 + num2;
    } else if (operation === '-') {
        answer = num1 - num2;
    } else if (operation === '*') {
        answer = num1 * num2;
    } else if (operation === '/') {
        answer = num2 !== 0 ? num1 / num2 : 'Error: dividing by 0';
    } else if (operation === 'sqrt') {
        answer = Math.sqrt(num1);
    } else if (operation === 'square') {
        answer = Math.pow(num1, 2);
    }

    document.getElementById('answer').innerText = answer;
}

/*5*/
function calculateTax() {
    let carPrice = parseFloat(document.getElementById('Price').value);
    let tax = 0;

    if (carPrice > 10000) {
        tax = carPrice * 0.25;
    } else if (carPrice >= 5000 && carPrice <= 10000) {
        tax = carPrice * 0.20;
    } else if (carPrice < 5000) {
        tax = carPrice * 0.15;
    }

    document.getElementById('taxAmount').innerText = tax.toFixed(2) + " USD";
}
