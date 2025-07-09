export function calculate(input: string): string {
    return calculateExpression(tokenize(input));
}


function calculateExpression(tokens: Array<string>): string {
    if (tokens.indexOf("(") !== -1) {
        tokens = solveBrackets(tokens);
    }
    if (tokens.indexOf("^") !== -1) {
        tokens = exponents(tokens);
    }
    if (tokens.indexOf("*") !== -1 || tokens.indexOf("/") !== -1) {
        tokens = multiplyDivide(tokens);
    }
    if (tokens.indexOf("+") !== -1 || tokens.indexOf("-") !== -1) {
        tokens = addSubtract(tokens);
    }
    if (tokens.length !== 1) {
        throw new Error("Invalid expression");
    }
    console.log("Tokens after solving brackets: ", String(tokens[0]));
    return String(tokens[0]);
}


function solveBrackets(input: Array<string>): Array<string> {
    let start = input.indexOf("(");
    let count = 1;
    let end = 0;
    for (let i = start + 1; i < input.length; i++) {
        if (input[i] === "(") {
            count++;
        } else if (input[i] === ")") {
            count--;
        }
        if (count === 0) {
            end = i;
            break;
        }
    }
    if (count !== 0) {
        throw new Error("Unmatched brackets in expression");
    }
    let inner = input.slice(start + 1, end);
    let result = calculateExpression(inner);
    return input.splice(start, result.length + 2, result);
}


function exponents(input: Array<string>): Array<string> {
    let index = input.indexOf("^");
    while (index !== -1) {
        let base = parseFloat(input[index - 1]);
        let exponent = parseFloat(input[index + 1]);
        let result = Math.pow(base, exponent);
        input.splice(index - 1, 3, String(result));
        index = input.indexOf("^");
    }
    return input;
}


function multiplyDivide(input: Array<string>): Array<string> {
    let index = input.indexOf("*");
    while (index !== -1) {
        let left = parseFloat(input[index - 1]);
        let right = parseFloat(input[index + 1]);
        let result = left * right;
        input.splice(index - 1, 3, String(result));
        index = input.indexOf("*");
    }
    index = input.indexOf("/");
    while (index !== -1) {
        let left = parseFloat(input[index - 1]);
        let right = parseFloat(input[index + 1]);
        if (right === 0) {
            throw new Error("Division by zero");
        }
        let result = left / right;
        input.splice(index - 1, 3, String(result));
        index = input.indexOf("/");
    }
    return input;
}


function addSubtract(input: Array<string>): Array<string> {
    let index = -1;
    if (input.indexOf("+") > input.indexOf("-")) {
        index = input.indexOf("-");
    } 
    else {
        index = input.indexOf("+");
    }
    while (index !== -1) {
        if (index === input.indexOf("+")) {
            let left = parseFloat(input[index - 1]);
            let right = parseFloat(input[index + 1]);
            let result = left + right;
            input.splice(index - 1, 3, String(result));
        }
        else {
            let left = parseFloat(input[index - 1]);
            let right = parseFloat(input[index + 1]);
            let result = left - right;
            input.splice(index - 1, 3, String(result));
        }
        if (input.indexOf("-") !== -1){
            if (input.indexOf("+") > input.indexOf("-")) {
                index = input.indexOf("-");
            }
            else {
                index = input.indexOf("+");
            }
        }
        else {
            index = input.indexOf("+");
        }
    }
    return input;
}


function tokenize(input: string): Array<string> {
    let temp = "";
    let tokens: Array<string> = [];
    for (let i = 0; i < input.length; i++) {
        if ("0123456789.".indexOf(input[i]) !== -1) {
            temp += input[i];
        }
        else {
            if (temp.length > 0) {
                tokens.push(temp);
                temp = "";
            }
            if (input[i] === "-") {
                if (i === 0){
                temp += input[i];
                }
                else {
                    if (input[i-1] === "(" || "+-*/^".indexOf(input[i - 1]) !== -1) {
                        temp += input[i];
                    } 
                    else {
                        tokens.push(input[i]);
                    }
                }
            }
            else if ("+/*^()".indexOf(input[i]) !== -1) {
                tokens.push(input[i]);
            }
        }

    }
    if (temp.length > 0) {
        tokens.push(temp);
        temp = "";
    }
    return tokens;
}

console.log(tokenize("-3+5*(2-8)^2/-4"));