// 자료형
// number(숫자형 - 정수, 소수점), string(문자형), 불린형, null, undefined, object

let a, b, c, d, e, f, g;
console.log("a타입", typeof a); // undefined 변수를 선언만 하고 값이 없는 상황

a = 2; 
b = "안녕하세요"; 
c = 3.141592; 
d = new Date(); 
e = {name:"hong", age:20}; 
f = null; 
g = true; 
console.log("a타입", typeof a); //number
console.log("b타입", typeof b); //string
console.log("c타입", typeof c); //number
console.log("d타입", typeof d); //object
console.log("e타입", typeof e); //object
console.log("f타입", typeof f); //object
console.log("g타입", typeof g); //boolean