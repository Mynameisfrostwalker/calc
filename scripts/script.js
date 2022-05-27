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
        if(num2 === 0) {
            mainDisplayArr = [];
            smallerDisplayArr = [];
            smallDisplay.textContent = "";
            mainDisplay.textContent = "Wish I Knew";
            return;
        }
       return divideNumbers(num1, num2)
    }
}

function addNumToDisplayArr (e) {
    const num = e.target.textContent;
    if(num === "." && !Number.isInteger(Number(mainDisplayArr[0]))) {
        return;
    }
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
        smallDisplayArr = Number.isInteger(result) ? [result, operator] : [result.toFixed(2), operator];
    } else if(mainDisplayArr[0] !== undefined){
        if(mainDisplayArr[0] !== "+" && mainDisplayArr[0] !== "-") {
            smallDisplayArr.push(mainDisplayArr[0])
            smallDisplayArr.push(operator)
            mainDisplayArr.pop()
        }
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
        mainDisplayArr = Number.isInteger(result) ? [result] : [result.toFixed(2)];
        smallDisplayArr = [];
        displayArrs()
    }
}

function clearNum() {
    mainDisplayArr = [];
    smallDisplayArr = [];
    displayArrs();
}

function backspaceNum() {
    if(mainDisplayArr.length > 0) {
        mainDisplayArr[0] = `${mainDisplayArr[0]}`
        mainDisplayArr[0] = mainDisplayArr[0].slice(0, -1);
    }else {
        mainDisplayArr.push(smallDisplayArr[0]);
        smallDisplayArr = [];
    }
    if(mainDisplayArr[0].length === 0){
        mainDisplayArr = [];
    }
    displayArrs();
}

function controlKey(e) {
    console.log(e.key)
    let num = parseInt(e.key, 10);
    if(!Number.isNaN(num) || e.key === ".") {
        addNumToDisplayArr({target:{textContent: e.key}})
    }
    if(e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*"){
        addOperator({target:{textContent: e.key}})
    }
    if(e.key === "Enter" || e.key === "=") {
        calculate();
    }
    if(e.key === "Backspace") {
        backspaceNum()
    }
    if(e.key === "c") {
        clearNum()
    }
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

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", backspaceNum)

window.addEventListener("keydown", controlKey)