// 조건문
// true : true 자료들, 0 제외 숫자, '문자', [], {}
// false : false 자료들, 0, '', null, undefiend, NaN

const date = new Date();
console.log(date); // 2025-04-07T01:07:02.258Z
const hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// NaN(Not a Number)
console.log("\n=== isNaN()");
console.log(isNaN("12")); // ""를 붙여도 내부를 숫자로 인식하기에 false
console.log(isNaN("abc")); // abc는 문자이기에 true

// "12" ==> 12
// Number() : 문자숫자 => 숫자
console.log("\n=== Number()");
const num1 = Number("23");
console.log("type", typeof num1);
console.log(Number("abc"));
console.log("78.45", Number(78.45));
console.log("Number('78 45 55')", Number("78 45 55"));

// parseInt() : 문자숫자 => 숫자, 소수점이있다면 제거
console.log("\n=== parseInt()");
const num2 = parseInt("33");
console.log("type", typeof num2);
console.log(parseInt("abc"));
console.log("78.45", parseInt(78.45));
console.log("parseInt('78 45 55')", parseInt("78 45 55"));

if (isNaN(Number("123"))) {
  console.log("문자");
} else {
  console.log("숫자");
}

// swith
console.log("\n=== switch");
let day = "";
switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    break;
}
console.log("오늘은 " + day);
