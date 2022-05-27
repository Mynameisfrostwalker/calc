const mainDisplay = document.querySelector(".mainDisplay");
const smallDisplay = document.querySelector(".smallDisplay");
const mainDisplayArr = [];
const smallDisplayArr = [];

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
    if(operator === "add") {
       return addNumbers(num1, num2)
    } else if(operator === "subtract") {
       return subtractNumbers(num1, num2)
    } else if(operator === "multiply") {
       return multiplyNumbers(num1, num2)
    } else if(operator === "divide") {
       return divideNumbers(num1, num2)
    }
}

function addNumToDisplayArr (e) {
    const num = e.target.textContent;
    if(mainDisplayArr[0]){
        mainDisplayArr[0] += num;
    } else {
        mainDisplayArr.push(num)
    }
    displayMainArr()
}

function displayMainArr () {
    mainDisplay.textContent = mainDisplayArr[0];
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", addNumToDisplayArr)
})