// 1 depth
var copyObject = function (target) {
  var result = {};

  for (const prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "satang",
  gender: "male",
};

var user2 = copyObject(user2);
user2.name = "minseok";

if (user !== user2) {
  console.log("유저 정보 변경");
}

console.log(user.name, user2.name);
console.log(user === user2);

// 객체 안의 객체는 얕은복사가 된다.
// 결론: 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사 => 재귀적 수행
// 재귀적으로 수행
// => 함수나 알고리즘이 자기 자신을 호출하여 반복적으로 실행되는 것
