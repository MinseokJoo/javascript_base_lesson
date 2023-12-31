Array.prototype.map123 = function (callback, thisArg) {
  var mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }

  return mappedArr;
};
var newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});

console.log(newArr);
