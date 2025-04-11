const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 80000, title: "Black Monastery" },
];

// 화면 영역 찾아오기
const cols = document.querySelectorAll(".col-sm-4");

cols.forEach((col) => {
  //   console.log(col);

  // 전체까지는 필요없음 h5, p만 찾으면 됨
  console.log(col.querySelector("h5").textContent);
  console.log(col.querySelector("p").textContent);
});

// 배열안의 정보를 이용해 화면에 보여주기

// const titles = document.querySelectorAll("h5");
// const prices = document.querySelectorAll("p");
// products.forEach((item, idx) => {
//   // 배열요소 하나 가져오기
//   console.log("idx : " + idx, "", item);
//   console.log("item title : " + item.title);

//   titles[idx].textContent = item.title;
//   prices[idx].textContent = item.price;
// });

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   console.log(products[i].title);
// }

cols.forEach((col, idx) => {
  // 배열요소 하나 가져오기
  col.querySelector("h5").textContent = products[idx].title;
  col.querySelector("p").textContent = products[idx].price;
});

// 두번째 방법
const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `<img src="https://placehold.co/600" alt="" class="w-100" />`;
  tags += `<h5>${item.title}</h5>`;
  tags += `<p>${item.price}</p>`;
  tags += `</div>`;
});
// console.log(tags);
// row 자식으로
row.insertAdjacentHTML("afterbegin", tags);
