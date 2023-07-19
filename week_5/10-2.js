const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

// [코드 설명]
// 1. 위 코드가 실행되면, '즉시실행함수'가 호출 => 함수가 반환 => increase에 할당
// 2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 '렉시컬 환경을 기억
// 3. 즉시 실행함수는 즉시 소멸
// 결론: num은 초기화 x 외부에서 접근할 수 없는 은닉된 값!
