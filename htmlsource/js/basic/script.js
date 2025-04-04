//"use strict" 바뀐 버전을 지켜달라는 선언 가장 윗줄에 선언한다

// alert("test")

// 줄바꿈이 있다면 세미콜론(;) 생략가능

// 자바스크립트에서 변수는 타입이 없음
// let, const, var(예전방식)
let a = 3;
console.log(typeof a);
console.log(a);

a = "test"; // '', "" 둘다 문자열로 인정됨
console.log(typeof a);
console.log(a);

// Cannot redeclare block-scoped variable 'a'.
// const a = 15; 상수 선언
const b = 15;
console.log(b);
// b = 20;
// console.log(b); // TypeError: Assignment to constant(상수) variable.

{
    let a = 333;
    console.log("block-scope ", a);
}

// 변수 범위
// var : function scope
// let, const : block-scope
function foobar() {
    var foo = 5;
    console.log(foo);
}// console.log(foo);  ReferenceError: foo is not defined


if(true) {
    var aa = 5;
    console.log(aa);
}
console.log(aa);


if(true) {
    let bb = 5;
    console.log("let block scope", bb);
}
console.log("let block scope", bb);