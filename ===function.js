// function strickEquality(a, b) {
//   if (Number.isNaN(a)) {
//     return false;
//   }
//   if (
//     (Object.is(a, 0) && Object.is(b, -0)) ||
//     (Object.is(a, -0) && Object.is(b, 0))
//   ) {
//     return true;
//   }
//   return Object.is(a, b);
// }

function strickEquality(a, b) {
  if (Object.is(a, b)) {
    if (Number.isNaN(a)) {
      return false;
    } else {
      return true;
    }
  } else {
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      return true;
    } else {
      return false;
    }
  }
}

let d = strickEquality(NaN, NaN);
console.log(d);
