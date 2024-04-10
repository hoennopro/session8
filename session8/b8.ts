function combineObjects(obj1: any, obj2: any): any {
  if (!obj1 || !obj2) {
    console.log("Invalid input: objects cannot be null or undefined.");
    return {};
  }

  const combinedObject: any = { ...obj1, ...obj2 };
  return combinedObject;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combined = combineObjects(obj1, obj2);
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

const invalidCombined = combineObjects(null, obj2);
console.log(invalidCombined); // {}
