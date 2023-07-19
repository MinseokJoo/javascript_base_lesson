// 무슨 제어권? 2탄
// 인자에 대한 제어권을 갖는다.
// map 함수
var newArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});

console.log(newArr);
