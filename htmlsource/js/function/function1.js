// 함수 == 자바의 메소드
// 함수 생성
function name(params) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMessage(params) {
  console.log("안녕하세요");
}
// 생성한 함수를 호출
showMessage();

// 2. 매개변수가 있는 함수
function multiply(x, y) {
  console.log(`${x}, ${y}`);
}
multiply(); // undefined, undefined
multiply(1); // 1, undefined
multiply(1, 3); // 1, 3

function multiply2(x, y) {
  return x * y;
}

console.log(multiply2()); // NaN
console.log(multiply2(5, 3)); // 15
console.log(multiply2); // [Function: multiply2]

// 매개변수 기본값이 있는경우
function multiply3(x, y = 3) {
  return x * y;
}

console.log(multiply3(5, 4)); // 20
console.log(multiply3(6)); // 18

function test(a, b, c, d) {
  b = b || 52;
  c = c || 273;

  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
test(1, 2, 5, 6); // a = 1, b = 2, c = 5, d = 6
test(3); // a = 3, b = 52, c = 273, d = undefined

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
}
b(); // a함수 안에 선언됐으므로 밖에서는 호출불가
c(); // a함수 안에 선언됐으므로 밖에서는 호출불가
a();
