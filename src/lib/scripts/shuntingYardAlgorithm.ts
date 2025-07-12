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

