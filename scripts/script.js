const mainDisplay = document.querySelector(".mainDisplay");
const smallDisplay = document.querySelector(".smallDisplay");
let mainDisplayArr = [];
let smallDisplayArr = [];

function addNumbers (num1, num2) {
    return num1 + num2
}

function subtractNumbers (num1, num2) {
    return num1 - num2
}

function multiplyNumbers (num1, num2) {
    return num1 * num2
}

function divideNumbers (num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    if(operator === "+") {
       return addNumbers(num1, num2)
    } else if(operator === "-") {
       return subtractNumbers(num1, num2)
    } else if(operator === "*") {
       return multiplyNumbers(num1, num2)
    } else if(operator === "/") {
       return divideNumbers(num1, num2)
    }
}

function addNumToDisplayArr (e) {
    const num = e.target.textContent;
    if(mainDisplayArr[0] !== undefined){
        mainDisplayArr[0] += num;
    } else {
        mainDisplayArr.push(num)
    }
    displayArrs()
}

function displayArrs() {
    if(mainDisplayArr[0] !== undefined) {
        mainDisplay.textContent = mainDisplayArr[0]
    } else {
        mainDisplay.textContent = "";
    }
    if(smallDisplayArr[0] !== undefined) {
        smallDisplay.textContent = smallDisplayArr[0] + " " + smallDisplayArr[1];
    } else {
        smallDisplay.textContent = "";
    }
}

function addOperator(e) {
    const operator = e.target.textContent;
    if(smallDisplayArr[1] !== undefined && mainDisplayArr[0] === undefined) {
        if(operator === "+" || operator === "-") {
            mainDisplayArr.push(operator)
        }
    } else if(smallDisplayArr[0] !== undefined) {
        const result = operate(parseFloat(smallDisplayArr[0]), parseFloat(mainDisplayArr[0]), smallDisplayArr[1]);
        mainDisplayArr = [];
        smallDisplayArr = [result.toFixed(2), operator];
    } else if(mainDisplayArr[0] !== undefined){
        smallDisplayArr.push(mainDisplayArr[0])
        smallDisplayArr.push(operator)
        mainDisplayArr.pop()
    } else {
        if(operator === "+" || operator === "-"){
             mainDisplayArr.push(operator)
        }
    }
    displayArrs()
}

function calculate() {
    if(smallDisplayArr[0] && mainDisplayArr[0]) {
        const result = operate(parseFloat(smallDisplayArr[0]), parseFloat(mainDisplayArr[0]), smallDisplayArr[1]);
        mainDisplayArr = [result.toFixed(2)];
        smallDisplayArr = [];
        displayArrs()
    }
}

function clearNum() {
    mainDisplayArr = [];
    smallDisplayArr = [];
    displayArrs();
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", addNumToDisplayArr)
})

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", addOperator)
})

const equal = document.querySelector(".equals");
equal.addEventListener("click", calculate)

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearNum)