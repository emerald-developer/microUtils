import { describe, it, expect } from "vitest";
import { Token, Stack, Tokens } from "../src/lib/scripts/dataStructures";
import { ShuntingYard } from "../src/lib/scripts/shuntingYard";

function toRPN(expr: string): string[] {
  const result = ShuntingYard(new Tokens(expr));
  if (!result) throw new Error("ShuntingYard returned undefined");
  return result.map(t => t.value);
}

describe("ShuntingYard", () => {
  it("should convert '3+4*2/(1-5)^2^3' to correct RPN", () => {
    // Expected RPN: 3 4 2 * 1 5 - 2 3 ^ ^ / +
    expect(toRPN("3+4*2/(1-5)^2^3")).toEqual([
      "3", "4", "2", "*", "1", "5", "-", "2", "3", "^", "^", "/", "+"
    ]);
  });

  it("should handle parentheses and precedence", () => {
    // (2+3)*4 => 2 3 + 4 *
    expect(toRPN("(2+3)*4")).toEqual(["2", "3", "+", "4", "*"]);
  });

  it("should handle unary minus", () => {
    // -3+4 => -3 4 +
    expect(toRPN("-3+4")).toEqual(["-3", "4", "+"]);
    // -(3+4) => 3 4 + _
    expect(toRPN("-(3+4)")).toEqual(["3", "4", "+", "_"]);
  });

  it("should throw on mismatched parentheses", () => {
    expect(() => toRPN("(1+2")).toThrow();
    expect(() => toRPN("1+2)")).toThrow();
  });
});

describe("Token", () => {
  it("should classify numbers", () => {
    const t = new Token("42");
    expect(t.type).toBe("number");
  });
  it("should classify operators", () => {
    expect(new Token("+").type).toBe("operator");
    expect(new Token("*").type).toBe("operator");
  });
  it("should classify parentheses", () => {
    expect(new Token("(").type).toBe("leftParenthesis");
    expect(new Token(")").type).toBe("rightParenthesis");
  });
  it("should classify unary minus", () => {
    expect(new Token("_").type).toBe("unaryMinus");
  });
});

describe("Stack", () => {
  it("should push and pop", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
    expect(s.pop()).toBeUndefined();
  });
  it("should peek", () => {
    const s = new Stack<string>();
    s.push("a");
    expect(s.peek()).toBe("a");
    s.pop();
    expect(s.peek()).toBeUndefined();
  });
  it("should report empty", () => {
    const s = new Stack();
    expect(s.isEmpty()).toBe(true);
    s.push(1);
    expect(s.isEmpty()).toBe(false);
  });
});

describe("Tokens", () => {
  it("should tokenize simple expressions", () => {
    const t = new Tokens("3+4");
    expect(t.tokens.map(tok => tok.value)).toEqual(["3", "+", "4"]);
  });
  it("should handle unary minus", () => {
    const t = new Tokens("-3+4");
    expect(t.tokens.map(tok => tok.value)).toEqual(["-3", "+", "4"]);
  });
  it("should handle parentheses", () => {
    const t = new Tokens("(1+2)");
    expect(t.tokens.map(tok => tok.value)).toEqual(["(", "1", "+", "2", ")"]);
  });
});