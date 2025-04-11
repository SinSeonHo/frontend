// 화살표 함수 : 함수표현식을 더욱 간단하게 표현
// const myFunc1 = function () {};
const myFunc1 = () => {};

const showMessage = () => console.log("안녕하세요"); // 수행할 내용이 한줄일경우 {} 생략가능

const multiply = (x, y) => console.log(`${x}, ${y}`);

const myFunc2 = (x, y) => x * y;

// 수행할 내용이 여러줄일 경우 {} 생략불가능
const myFunc3 = (x) => {
  if (x % 9 == 0) {
    console.log("박수x2");
  } else if (x % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
myFunc2(27);
myFunc2(30);
myFunc2(5);

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];

// fruits.forEach(function (element) {});
fruits.forEach((element) => console.log(element));
