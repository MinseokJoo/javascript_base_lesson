var copyObject = function (target) {
  var result = {};

  // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근 가능
  for (const prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
