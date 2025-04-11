// 연산자
// 산술, 비교, 연결
let a = 4,
  b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 자바에서는 몫만 나오지만 자바스크립트에서는 소수점까지 모두 표현해줌
console.log("a % b = ", a % b);

// + : 숫자 + 문자로 연결됨
let c = "3";
console.log("a + c = ", a + c); // 4 + "3" 연결의 의미로쓰임

// -, *, /, % : 문자와 숫자의 산술연산
console.log("\n--문자와 숫자의 산술연산");
console.log("a - c = ", a - c); // a - c =  1
console.log("a * c = ", a * c); // a * c =  12
console.log("a / c = ", a / c); // a / c =  1.3333333333333333
console.log("a % c = ", a % c); // a % c =  1

// 비교 연산자 : ==(값 비교), !=(값 비교), ===(값과 타입 비교), !==(값과 타입 비교)
let d = "4";
console.log("a == d", a == d); // true 4 == "4"
console.log("a === d", a === d); // false 4 === "4"
console.log("a != d", a != d); // flase
console.log("a !== d", a !== d); // true

// 단항 연산자 ++, --
