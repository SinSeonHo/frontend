// 요소 찾기
// querySelector() : 조건에 맞는 첫번째 요소만 찾아옴
let div = document.querySelector("div");
console.log(div);

div = document.querySelector(".container-fluid");
console.log(div);

// querySelectorAll() => NodeList : div 태그 모두 찾기
let divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach((div) => {
  console.log(div);
});

let btn = document.querySelector(".navbar-toggler");
console.log(btn);

// 메뉴 찾기
const lis = document.querySelectorAll(".navbar-nav > .nav-item");

lis.forEach((li) => {
  console.log(li);
});

// form태그 class로 찾기
let form = document.querySelector(".d-flex");
console.log(form);

// form태그 role속성으로 찾기
form = document.querySelector("[role='search']");
console.log(form);

// form 안 input 요소 찾기
// let inputs = document.querySelectorAll("form input");
// inputs.forEach((input) => {
//   console.log(input);
// });
let input = form.querySelector(".form-control");
console.log(input);
// 이름 이용
input = form.search;
console.log(input);

// table 찾기
let table = document.querySelector(".table");
console.log(table);

// table 안 thead 찾기
let thead = document.querySelector(".table > thead");
console.log(thead);
thead = table.querySelector("thead");
console.log(thead);

// table 안 tbody 두번째 tr 찾기
let secondtr = document.querySelector(".table > tbody > tr:nth-child(2)");
console.log(secondtr);
