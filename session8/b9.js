function processInput(input) {
    if (typeof input === "number") {
        return Math.pow(input, 2);
    }
    else if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    else {
        console.log("Invalid input");
        return null;
    }
}
console.log(processInput(5)); //  25
console.log(processInput("Hello")); //  5
console.log(processInput([1, 2, 3, 4, 5])); // 5
console.log(processInput(true)); // Invalid input, trả về null
