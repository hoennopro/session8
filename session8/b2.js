function validatePerson(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "object");
}
var person1 = {
    name: "huhu",
    age: 30,
    address: { city: "hn", country: "sg" },
};
console.log(validatePerson(person1));
var person2 = {
    name: "haha",
    age: "25",
    address: { city: "dn", country: "hcm" },
};
console.log(validatePerson(person2));
var person3 = {
    name: "hehe",
    age: 40,
    address: "sd",
};
console.log(validatePerson(person3));
