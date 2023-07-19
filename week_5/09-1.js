// 렉시컬 스코프
// JS엔진은 함수를 어디서 '호출'했는가가 아니라
// 어디에 '정의' 했는지에 따라서 스코프(상위)를 결정한다.

// '외부 렉시컬 환경에 대한 참조값' => outer
// 함수가 정의가 평가되는 시점에 결정된다.
const x = 1;

// outerFunc 내에서 innerFunc가
// 호출되고 있음에도 불구하고
// 선언은 밖에서 됐기 때문에 스코프를 공유하지 않음
function outerFunc() {
  const x = 10;
  innerFunc();
}

// innerFunc와 outerFunc는 서로
// 다른 스코프를 가지고 있다.
function innerFunc() {
  console.log(x);
}

outerFunc();
