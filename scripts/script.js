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