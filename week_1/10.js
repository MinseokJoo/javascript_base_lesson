// 조건문 - if, else if, else, switch
// // falsy한 값, truthy한 값
// 0, "", null, undefined, NaN ···
// 1. if문
let x = 10;

if (x > 0) {
  console.log("x는 양수!");
}

// 2. if - else문
if (x > 0) {
  console.log("x는 양수!");
} else {
  console.log("x는 음수!");
}

// 3. if - else if - else 문
if (x < 0) {
  console.log("1");
} else if (x >= 0 && x < 10) {
  console.log("2");
} else {
  console.log("3");
}

// 4. switch
// 변수의 값에 따라, 여러 개의 경우 (case) 중 하나를 선택
// default
let fruit = "사과";
switch (fruit) {
  case "사과":
    console.log(fruit);
    break;

  case "바나나":
    console.log(fruit);
    break;

  default:
    console.log("과일이 아닙니다.");
    break;
}
