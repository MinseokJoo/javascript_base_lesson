// 무슨 제어권? 1탄
// 1. 호출 시점에 대한 제어권을 갖는다.
var count = 0;

var cbFunc = function () {
  console.log(count);
  if (++count > 4) {
    clearInterval(timer);
  }
};

var timer = setInterval(cbFunc, 300);
