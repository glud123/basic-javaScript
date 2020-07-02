/**
 * Array.prototype.reduce 实现
 */

// Object.defineProperty(Array.prototype, "reduce", {
//   value: function (callback) {
//     if (thid === null)
//       throw new TypeError(
//         "Array.prototype.reduce called with null or undefined!"
//       );
//     if (typeof callback != "function")
//       throw new TypeError("callback must be a function!");
//     let o = Object(this);
//     let len = o.length;
//     let k = index;
//     let v;
//     if (arguments.length >= 2) {
//       v = arguments[1];
//     } else {
//       while (k < len) {
//         k++;
//       }
//       if (k >= len) {
//         throw new TypeError("Reduce of empty array with no initial value!");
//       }
//       v = o[k++];
//     }
//     while (k < len) {
//       if (k in o) {
//         v = callback(v, o[k], k, o);
//       }
//       k++;
//     }
//     return v;
//   },
// });
// [1, 2, 3, 4, 5, 6].reduce((a, b, c, d) => {
//   console.log(a, b, c, d);
//   return a + b;
// });

// Object.defineProperty(Array.prototype, "reduce", {
//   get() {
//     return function (callback) {
//       if (this === null)
//         throw new TypeError(
//           "Array.prototype.reduce called with null or undefined"
//         );
//       if (typeof callback !== "function")
//         throw new TypeError("callbck must be a function");
//       let o = Object(this);
//       let l = o.length >>> 0;
//       let k = 0;
//       let v;
//       if (arguments.length >= 2) {
//         v = arguments[1];
//       } else {
//         while (k < l && !(k in o)) {
//           k++;
//         }
//         if (k > l)
//           throw new TypeError("Reduce of empty array with no initial value");
//         v = o[k++];
//       }
//       while (k < l) {
//         if (k in o) v = callback(v, o[k], k, o);
//         k++;
//       }
//       return v;
//     };
//   },
// });

// Object.defineProperty(Array.prototype, "reduceA", {
//   value: function (callback) {
//     if (this === null)
//       throw new TypeError(
//         "Array.prototype.reduceA called with null or undefined"
//       );
//     if (typeof callback !== "function")
//       throw new TypeError("callback must be a function");
//     let o = Object(this);
//     let l = o.length >>> 0;
//     let k = 0;
//     let v;
//     if (arguments.length >= 2) {
//       v = arguments[1];
//     } else {
//       while (k < l && !(k in o)) {
//         k++;
//       }
//       if (k > l)
//         throw new TypeError("Reduce of empty array with no initial value");
//       v = o[k++];
//     }
//     while (k < l) {
//       if (k in o) {
//         v = callback(v, o[k], k, o);
//       }
//       k++;
//     }
//     return v;
//   },
// });

Object.defineProperty(Array.prototype, "reduceB", {
  value: function (callback) {
    if (this === null)
      throw new TypeError(
        "Array.prototype.reduceB called with null or undefined"
      );
    if (typeof callback !== "function")
      throw new TypeError("callback must be a function");
    let o = Object(this);
    let l = o.length >>> 0;
    let k = 0;
    let v;
    if (arguments.length >= 2) {
      v = arguments[1];
    } else {
      while (k < l && !(k in o)) {
        k++;
      }
      if (k > l)
        throw new TypeError("reduce of empty array with no initial value");
      v = o[k++];
    }
    while (k < l) {
      if (k in o) v = callback(v, o[k], k, o);
      k++;
    }
    return v;
  },
});

let sum = [1, 2, 3, 4, 5, 6].reduceB((a, b, c, d) => {
  console.log(a, b, c, d);
  return a + b;
});

console.log(sum);
