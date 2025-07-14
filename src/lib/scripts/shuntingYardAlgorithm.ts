class Token {
  value: string;
  type: "number" | "operator" | "leftParenthesis" | "rightParenthesis";
  precedence?: number;
  associativity?: "left" | "right";

  constructor(value: string) {
    this.value = value;
    if (/\d/.test(value)) {
      this.type = "number";
    } else if (value === "(") {
      this.type = "leftParenthesis";
    } else if (value === ")") {
      this.type = "rightParenthesis";
    } else {
      this.type = "operator";
      this.precedence = this.getPrecedence();
      this.associativity = this.getAssociativity();
    }
  }

  private getPrecedence(): number {
    switch (this.value) {
      case "+":
      case "-":
        return 2;
      case "*":
      case "/":
        return 3;
      case "^":
        return 4;
      default:
        return 0;
    }
  }

  private getAssociativity(): "left" | "right" {
    switch (this.value) {
      case "^":
        return "right";
      default:
        return "left";
    }
  }
}

class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}

class Tokens {
  tokens: Token[];

  constructor(expression: string) {
    this.tokens = this.tokenize(expression);
  }

  private tokenize(expression: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;
    while (i < expression.length) {
      const char = expression[i];
      if (/\s/.test(char)) {
        i++;
        continue;
      }

      if (/\d/.test(char)) {
        let num = "";
        while (i < expression.length && /\d|\./.test(expression[i])) {
          num += expression[i];
          i++;
        }
        tokens.push(new Token(num));
        continue;
      }

      if ("+-*/^()".includes(char)) {
        tokens.push(new Token(char));
        i++;
        continue;
      }
      throw new Error(`Unknown character: ${char}`);
    }
    return tokens;
  }
}

function ShuntingYard(tokens: Tokens): Token[] | undefined {
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
    if (token.type === "operator") {
      while (
        !stack.isEmpty() &&
        stack.peek()?.type === "operator" &&
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
