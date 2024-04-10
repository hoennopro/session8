function print(input: string | string[]): void {
  if (typeof input === "string") {
    // Nếu input là một chuỗi, in ra nó
    console.log(input);
  } else if (Array.isArray(input)) {
    // Nếu input là một mảng chuỗi, in ra từng phần tử của mảng đó
    input.forEach((item) => console.log(item));
  } else {
    console.log("Invalid input"); // In ra thông báo lỗi nếu đầu vào không hợp lệ
  }
}

print("Hello"); // In ra: Hello

const arrayStrings: string[] = ["Apple", "Banana", "Orange"];
print(arrayStrings);
// In ra:
// Apple
// Banana
// Orange

// Thử với một đầu vào không hợp lệ
print(10); // In ra: Invalid input
