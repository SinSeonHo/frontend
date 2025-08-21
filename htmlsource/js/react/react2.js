// 일급함수 : 함수를 일반 변수에 대입
const foo = () => {
  console.log("foobar");
};

foo();

// 함수를 일반변수인자로 대입
function logText(message) {
  message();
}
logText(() => {
  console.log("hi");
});
