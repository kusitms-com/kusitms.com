export function toUpperCaseOnlyLetters(input: string): string {
  return input.replace(/[a-zA-Z]/g, (char) => char.toUpperCase());
}
