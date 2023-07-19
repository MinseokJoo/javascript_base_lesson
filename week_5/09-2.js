// 클로저
const x = 1;
function outerFunc() {
  const x = 10;
  const innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}
const inner = outerFunc();
// outer 함수의 실행 컨텍스트는 out된다.
inner();
