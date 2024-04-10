type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: string;
};

const employee: Employee = {
  name: "hoen",
  age: 20,
  employeeId: "E123456",
};

console.log(employee);
