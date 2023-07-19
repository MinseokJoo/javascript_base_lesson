var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 21],
  },
};

// 위 함수를 실행 시 배열도 객체 형식으로 나온다.
// var obj2 = copyObjectDeep(obj);

var obj2 = JSON.stringify(obj);
obj2 = JSON.parse(obj2);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
