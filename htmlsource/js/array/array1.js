// 배열 생성
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];

// 자바와 다르게 서로 다른 타입도 배열에 넣을수있음
const others = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 조회
// 전체
console.log("\n--- for i 사용");
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

// 자바의 향상된 for문과 같은 개념
console.log("\n--- for of 사용");
for (const element of others) {
  console.log(element);
}

console.log("\n--- foreach 사용");
array1.forEach((item) => {
  console.log(item);
});

console.log("\n--- 배열확인용이라면 배열명만 사용해도가능");
console.log(planet);
// 배열을 문자열로
console.log(planet.toString());
