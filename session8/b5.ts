type A = { foo: number };
type B = { bar: string };

type AB = A & B;
type C = { baz: boolean };

type ABC = AB | C;

let obj1: ABC = { foo: 10, bar: "Hello" }; // Hợp lệ, vì có cả thuộc tính foo và bar
let obj2: ABC = { baz: true }; // Hợp lệ, vì có thuộc tính baz
// let obj3: ABC = { foo: 10 }; // Không hợp lệ, vì thiếu thuộc tính bar hoặc baz
