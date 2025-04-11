// 1. 함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function mySum(x, y) {
  return x + y;
}
console.log(mySum(2, 5));

console.log("========================");

// 2. 함수표현식으로 1번을 변경
const sum = function (x, y) {
  return x + y;
};
console.log(mySum(2, 5));

console.log("========================");

// 3. 1 ~ 10 까지 더하는 작업을 함수 표현식으로 작성
const onetoten = function () {
  let num = 0;
  for (let i = 1; i < 11; i++) {
    num += i;
  }
  return num;
};
console.log(onetoten());

console.log("========================");

// 4. 숫자를 인자로 받아서 3의 배수 찾기 3의 배수라면 박수 출력, 아니라면 통과
const myFunc1 = function (x) {
  if (x % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
myFunc1(33);
myFunc1(5);

console.log("========================");

// 5. 4번 개선 (3의 배수라면 박수, 아니라면 통과) + 9의 배수라면 박수x2 출력
const myFunc2 = function (x) {
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

console.log("========================");

// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//    과목은 2 과목이라 하고, 두 과목 합해서 120점 이상이면 합격
//    한 과목이 40점이만이면 과락으로 불합격
const testFun = function (x, y) {
  if (x + y >= 120 && x >= 40 && y >= 40) {
    console.log("합격");
  } else if (x < 40 || y < 40) {
    console.log("과락으로 불합격");
  } else {
    console.log("불합격");
  }
};
testFun(50, 70);
testFun(90, 30);
testFun(50, 50);
