/**
 * Array.prototype.every 实现
 */

// Object.defineProperty(Array.prototype, "every", {
//   value: function (callback) {
//     if (this === null) {
//       throw new TypeError("Array.prototype.every called on null or undefined");
//     }
//     if(typeof callback !== "function"){
//       throw new TypeError("callback must be a function");
//     }
//     let o = Object(this);
//     let l = o.length >>> 0;
//     let k = 0;
//     let T;
//     if(arguments.length > 1){
//       T = arguments[1];
//     }
//     while (k < l) {
//       if (k in o) {
//         let result = callback.call(T, o[k], k, o);
//         if (!result) {
//           return false;
//         }
//       }
//       k++;
//     }
//     return true;
//   },
// });

// function isBigEnough(element, index, array) {
//   console.log(element, index, array);
//   return element >= 10;
// }
// let a = [12, 5, 8, 130, 44].every(isBigEnough);
// let b = [12, 54, 18, 130, 44].every(isBigEnough);
// console.log(a, b);

Object.defineProperty(Array.prototype, "every", {
  value: function (callback) {
    if (this === null)
      throw new TypeError("Array.prototype.every called on null or undefined");
    if (typeof callback !== "function")
      throw new TypeError("callback must be a function");
    let o = Object(this);
    let l = o.length >>> 0;
    let k = 0;
    let t;
    if (arguments.length > 1) {
      t = arguments[1];
    }
    while (k < l) {
      if (k in o) {
        let r = callback.call(t, o[k], k, o);
        if (!r) {
          return false;
        }
      }
      k++;
    }
    return true;
  },
});

function isBigEnough(element, index, array) {
  console.log(element, index, array);
  return element >= 10;
}
let a = [].every(isBigEnough);
let b = [12, 54, 18, 130, 44].every(isBigEnough);
console.log(a, b);
