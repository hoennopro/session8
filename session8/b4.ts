function square(input: number | number[]): number | number[] {
  if (typeof input === "number") {
    return input ** 2;
  } else if (Array.isArray(input)) {
    return input.map((num) => num ** 2);
  } else {
    return NaN;
  }
}

console.log(square(5));
console.log(square([1, 2, 3, 4]));

console.log(square("invalid"));
