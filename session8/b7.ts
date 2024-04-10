function checkType(input: any): void {
  if (typeof input === "number") {
    console.log("This is a number.");
  } else if (Array.isArray(input)) {
    console.log("This is an array.");
  } else if (typeof input === "object" && input !== null) {
    console.log("This is an object.");
  } else {
    console.log("This is of unknown type.");
  }
}

checkType(10); // This is a number.
checkType([1, 2, 3]); //  This is an array.
checkType({ name: "hoen", age: 20 }); // This is an object.
checkType("Hello"); // This is of unknown type.
