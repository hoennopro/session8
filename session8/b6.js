function print(input) {
    if (typeof input === "string") {
        // Nếu input là một chuỗi, in ra nó
        console.log(input);
    }
    else if (Array.isArray(input)) {
        // Nếu input là một mảng chuỗi, in ra từng phần tử của mảng đó
        input.forEach(function (item) { return console.log(item); });
    }
    else {
        console.log("Invalid input"); // In ra thông báo lỗi nếu đầu vào không hợp lệ
    }
}
print("Hello"); // In ra: Hello
var arrayStrings = ["Apple", "Banana", "Orange"];
print(arrayStrings);
// In ra:
// Apple
// Banana
// Orange
// Thử với một đầu vào không hợp lệ
print(10); // In ra: Invalid input
