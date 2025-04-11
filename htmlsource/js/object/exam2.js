// 2개의 주사위를 던졌을 때 나오는 눈을 (5,3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행 중단

let loop = true;

while (loop) {
  let a = 0;
  let b = 0;

  a = Math.floor(Math.random() * 6) + 1;
  b = Math.floor(Math.random() * 6) + 1;
  if (a + b == 5) {
    console.log(`(${a}, ${b} 두 수의 합은 ${a + b} 실행중단!!`);
    loop = false;
  } else {
    console.log(`(${a}, ${b} 두 수의 합은 ${a + b} 계속실행!!`);
  }
}

// 로또 번호 6개를 추출하여 배열에 담은 후 출력 1 ~ 45

let lottoArr = [];

while (true) {
  let lottonum = Math.floor(Math.random() * 45) + 1;

  if (lottoArr.indexOf(lottonum) == -1) {
    lottoArr.push(lottonum);
  }

  if (lottoArr.length > 5) break;
}

console.log("로또번호 출력 : " + lottoArr);
