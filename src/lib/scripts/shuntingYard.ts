import { Stack, Token, Tokens } from "./dataStructures";


export function ShuntingYard(tokens: Tokens): Token[] | undefined {
  const output: Token[] = [];
  const stack = new Stack<Token>();
  for (const token of tokens.tokens) {
    if (token.type === "number") {
      output.push(token);
    }
    if (token.type === "leftParenthesis") {
      stack.push(token);
    }
    if (token.type === "rightParenthesis") {
      while (stack.peek()?.value !== "(") {
        output.push(stack.pop()!);
        if (stack.isEmpty()) {
          throw new Error("Mismatched parentheses");
        }
      }
      stack.pop();
    }
    if (token.type === "unaryMinus") {
      while (
        !stack.isEmpty() &&
        stack.peek()?.type === "operator" &&
        (
          (stack.peek()!.precedence! > token.precedence!) ||
          (stack.peek()!.precedence! === token.precedence! &&
            token.associativity === "left") // Your existing left-associative check is fine here.
        )
      ) {
        output.push(stack.pop()!);
      }
      stack.push(token);
    }
    if (token.type === "operator") {
      while (
        !stack.isEmpty() &&
        (
          (stack.peek()!.precedence! > token.precedence!) ||
          (stack.peek()!.precedence! === token.precedence! &&
            token.associativity === "left")
        )
      ) {
        output.push(stack.pop()!);
      }
      stack.push(token);
    }
  }
  while (!stack.isEmpty()) {
    output.push(stack.pop()!);
  }
  return output;
}

function solve(tokens: Token[]): number | string {
  let solvedStack:Array<number | string> = [];
  for (const token of tokens) {
    if (token.type === "number") {
      solvedStack.push(parseFloat(token.value));
    }
    else {
      if (token.value === "-") {
        const b = solvedStack.pop()!;
        const a = solvedStack.pop()!;
        solvedStack.push(Number(a) - Number(b));
      }
      if (token.value === "+") {
        const b = solvedStack.pop()!;
        const a = solvedStack.pop()!;
        solvedStack.push(Number(a) + Number(b));
      }
      if (token.value === "*") {
        const b = solvedStack.pop()!;
        const a = solvedStack.pop()!;
        solvedStack.push(Number(a) * Number(b));
      }
      if (token.value === "/") {
        const b = solvedStack.pop()!;
        const a = solvedStack.pop()!;
        solvedStack.push(Number(a) / Number(b));
      }
      if (token.value === "^") { 
        const b = solvedStack.pop()!;
        const a = solvedStack.pop()!;
        solvedStack.push(Math.pow(Number(a), Number(b)));
      }
      if (token.value === "_") {
        const a = solvedStack.pop()!;
        solvedStack.push(-Number(a));
      }
    }
  }
  return solvedStack.pop()!;
}
let expression = ShuntingYard(new Tokens("-3+5*-(2-8)^2/-4"))!;
let str = "";
for (const token of expression) {
  str += token.value + " ";
}
console.log(str);
console.log(solve(expression));


//  -3 5 * + 2 8 - 2 ^ -4 / -