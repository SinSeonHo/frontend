// 반복문
// for (let index = 0; index < array.length; index++) {

// }

// 자바에서는 ->
// array.forEach(element => {

// });

// for (const key in object) {

// }

// for (const element of object) {

//}

// 1 ~ 10 출력
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// 1 ~ 100 까지 합
let sum = 0;
for (let index = 1; index < 101; index++) {
  sum += index;
}
console.log("1 ~ 100 합은 : ", sum);

// while
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

sum = 0;
i = 1;
while (i < 101) {
  sum += i;
  i++;
}
console.log("1 ~ 100 합은 : ", sum);

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

console.log("\n---- for in : 객체 출력때 주로 사용");
const myCar = { make: "BMW", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log("myCar ", txt);

// `${변수명}` : 변수 + 문자열 출력시
const music = { singer: "아델", time: 15, title: "hello" };
for (const key in music) {
  //console.log(key + " : " + music[key]);
  console.log(`${key} : ${music[key]}`);
}

// break, continue
console.log("\n--- break");
for (let index = 0; index < 101; index++) {
  if (index == 50) break;
  console.log(index);
}

console.log("\n--- continue");
for (let index = 0; index < 40; index += 2) {
  if (index == 0) continue;
  console.log(index);
}
