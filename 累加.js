/**
 * 累加
 */

function add() {
  let s;
  function func() {
    let arg = s === undefined ? [...arguments] : [s, ...arguments];
    s = arg.reduce((a, b) => {
      return a + b;
    });
    return func;
  }
  func.valueOf = function() {
    return s;
  }
  // Object.defineProperty(func, "valueOf", {
  //   value: function () {
  //     return s;
  //   },
  // });
  return func.call(this, ...arguments);
}

console.log(add(1)(2)(3).valueOf());
