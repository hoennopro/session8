function calculateArea(shape) {
    if ("sideLength" in shape) {
        return Math.pow(shape.sideLength, 2);
    }
    else if ("radius" in shape) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        throw new Error("Invalid shape");
    }
}
var square = { sideLength: 5 };
console.log("Diện tích hình vuông:", calculateArea(square));
var circle = { radius: 3 };
console.log("Diện tích hình tròn:", calculateArea(circle));
var invalidShape = { width: 4 };
