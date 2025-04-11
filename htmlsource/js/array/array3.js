// 배열 생성
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];

// 자바와 다르게 서로 다른 타입도 배열에 넣을수있음
const others = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 메소드
// join() : ()안에 문자로 이어서 string 으로 반환
// toString은 , 로 연결됨
console.log("배열 요소 연결 : " + fruits.join("-"));
console.log("배열 요소 연결 : " + fruits.toString());
console.log("배열 연결 : " + fruits.concat(array1));
console.log("배열 분할 : " + fruits.slice(1, 3));
console.log("배열 정렬 : " + fruits.sort());

const array2 = [22, 35, 1, 3, 7, 88, 92];
// 숫자 정렬x
console.log("배열 정렬 : " + array2.sort());

console.log("배열 오름차순정렬 : " + array2.sort((a, b) => a - b));
console.log("배열 내림차순정렬 : " + array2.sort((a, b) => b - a));
console.log("배열 거꾸로 출력 : " + fruits.reverse());
console.log("망고의 index 찾기 : " + fruits.indexOf("망고"));
console.log("망고의 포함여부 inclueds 찾기 : " + fruits.includes("망고"));
console.log("딸기의 index 찾기 : " + fruits.indexOf("딸기")); // 못찾으면 -1
console.log("딸기의 포함여부 inclueds 찾기 : " + fruits.includes("딸기")); // 못찾으면 -1

console.log(
  "30보다 큰 배열 요소 ",
  array2.find((item) => item > 30)
);

console.log(
  "30보다 큰 배열 요소 ",
  array2.findIndex((item) => item > 30)
);
// map() : 새로운 배열로 리턴
const result = array2.map((item) => item * 2);
console.log("map " + result);

console.log("filter " + array2.filter((item) => item > 10));

// 얕은복사(주소복사) 깊은복사(값 복사 - 서로 다른 주소값)
let fruits2 = fruits; // 얕은복사(동일한 주소값)

// ... : spread
let shallowCopy = [...fruits]; // 깊은 복사

fruits.push("딸기");
console.log("추가 후 : " + fruits.toString());
console.log("추가 후 : " + fruits2.toString());
console.log("추가 후 : " + shallowCopy.toString());

// 동일한 값으로 배열 생성
const array3 = [1, 1, 1, 1, 1];
const array4 = new Array(5).fill(1);
console.log("동일한 값으로 배열 생성 : " + array4.toString());

// fruits => array5 복사
// array.forEach(element => {
// });
const array5 = [];
fruits.forEach((item) => array5.push(item));
console.log("forEach를 이용한 fruits 값 복사 : ", array5);

// 2차원 배열생성
let array6 = [
  [1, 2, 3],
  [4, 5, 6],
];
// flat() : 2차원배열 => 1차원배열로 변환
console.log(array6.flat());

array6 = [
  [1, 2, 3],
  [4, 5, 6, [9, [10, 11]]],
];

console.log(array6.flat());
console.log(array6.flat(2));
console.log(array6.flat(3));

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
// varArr1, varArr2 합친 후 새 배열 생성
let newArr = varArr1.concat(varArr2);
console.log("합친 후 : ", newArr);

let toArr = [varArr1, varArr2]; // 얕은복사
let toArr2 = [...varArr1, ...varArr2]; // 깊은복사 + concat의 효과
console.log(toArr);
varArr1[0] = "num5";
console.log("varArr1[0] 변경 후 : ", varArr1);
console.log("varArr1[0] 변경 후 : ", toArr);
console.log("varArr1[0] 변경 후 : ", toArr2);
