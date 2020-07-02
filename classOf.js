/**
 * classOf 获取当前变量的类型
 */

function classOf() {
  let arr = [...arguments];
  arr.map((obj) => {
    let type = Object.prototype.toString.call(obj).slice(8, -1);
    // type = type.split(" ")[1].replace("]", "");
    console.log(type);
  });
}

let a = "1";
let b = 1;
let c = [1, 2, 3];
let d = {
  a: 1,
  b: 2,
};
let e = Symbol("1");
let f = function () {
  return 1;
};
let g = new Date();
let h = true;
let i = null;
let j = undefined;
let k = new Promise(() => {});
classOf(a, b, c, d, e, f, g, h, i, j, k);

