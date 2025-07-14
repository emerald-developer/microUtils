function tokenizer(input: string): string[] {
  const tokens: string[] = [];
  let currentToken = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '+' || char === '*' || char === '/'|| char === '^'|| char === '(' || char === ')') {
      if (currentToken !== '') {
        tokens.push(currentToken);
        currentToken = '';
      }
      tokens.push(char);
    } else if (char === ' ') {
      continue;
    } else if (char === '-') {
      if (currentToken === '') {
        currentToken += char;
      } else {
        tokens.push(currentToken);
        currentToken = char;
      }
    }
     else {
      currentToken += char;
    }
  }
  return tokens;
}

class Token{
  value: string;
  type: 'number' | 'operator' | 'paren';
  precedence?: number;
  associativity?: 'left' | 'right';

  constructor(value: string) {
    this.value = value;
    if (/\d/.test(value)) {
      this.type = 'number';
    } else if (value === '(' || value === ')') {
      this.type = 'paren';
    } else {
      this.type = 'operator';
      this.precedence = this.getPrecedence();
      this.associativity = this.getAssociativity();
    }
  }

  private getPrecedence(): number {
    switch (this.value) {
      case '+':
      case '-':
        return 2;
      case '*':
      case '/':
        return 3;
      case '^':
        return 4;
      default:
        return 0;
    }
  }

  private getAssociativity(): 'left' | 'right' {
    switch (this.value) {
      case '^':
        return 'right';
      default:
        return 'left';
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

