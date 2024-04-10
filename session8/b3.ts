type Square = {
  sideLength: number;
};

type Circle = {
  radius: number;
};

type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
  if ("sideLength" in shape) {
    return shape.sideLength ** 2;
  } else if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    throw new Error("Invalid shape");
  }
}

const square: Square = { sideLength: 5 };
console.log("Diện tích hình vuông:", calculateArea(square));

const circle: Circle = { radius: 3 };
console.log("Diện tích hình tròn:", calculateArea(circle));

const invalidShape = { width: 4 };
