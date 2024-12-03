import { Equal, Expect } from "@total-typescript/helpers";
import { describe, expect, it } from "vitest";

const arrayOfStringTypeGuard = (value: unknown) : Array<string> => {
  if(Array.isArray(value) && value.every((item) => typeof item === "string")) {
    return value;
  } 
  throw new Error('Parsing failed');
}

const joinNames = (value: unknown) => {
  return arrayOfStringTypeGuard(value).join(' ');
};

const createSections = (value: unknown) => {
    return  arrayOfStringTypeGuard(value).map((item) => `Section: ${item}`);
};

describe("joinNames", () => {
  it("Should handle an array of strings", () => {
    const result = joinNames(["John", "Doe"]);

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe("John Doe");
  });

  it("Should error when anything else is passed in", () => {
    expect(() => joinNames("John")).toThrow("Parsing error!");
    expect(() => joinNames(123)).toThrow("Parsing error!");
  });
});

describe("createSections", () => {
  it("Should handle an array of strings", () => {
    const result = createSections(["John", "Doe"]);

    type test = Expect<Equal<typeof result, string[]>>;

    expect(result).toEqual(["Section: John", "Section: Doe"]);
  });

  it("Should error when anything else is passed in", () => {
    expect(() => createSections("John")).toThrow("Parsing error!");
    expect(() => createSections(123)).toThrow("Parsing error!");
  });
});
