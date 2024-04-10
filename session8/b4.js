function square(input) {
    if (typeof input === "number") {
        return Math.pow(input, 2);
    }
    else if (Array.isArray(input)) {
        return input.map(function (num) { return Math.pow(num, 2); });
    }
    else {
        return NaN;
    }
}
console.log(square(5));
console.log(square([1, 2, 3, 4]));
console.log(square("invalid"));
