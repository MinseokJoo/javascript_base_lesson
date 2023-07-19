var obj1 = {
  outer: function () {
    console.log("outer => ", this);
    var innerFunc = function () {
      console.log("innerFunc => ", this);
    };
    innerFunc(); // global
    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod(); // obj2
  },
};
obj1.outer(); // obj1
