let obj = {
  a: 1,
  b: {
    b1: [1, 2, 3],
    b2: function () {
      return 1;
    },
  },
  c: function () {
    return 2;
  },
};

function deepClone(Obj) {
  let newObj;
  if (Array.isArray(Obj)) {
    newObj = [];
    Obj.forEach((element, index) => {
      newObj[index] = deepClone(element);
    });
  } else if (typeof Obj === "object" && Obj !== null) {
    newObj = {};
    for (const key in Obj) {
      if (Obj.hasOwnProperty(key)) {
        const element = Obj[key];
        newObj[key] = deepClone(element);
      }
    }
  } else if (typeof Obj === "function") {
    eval("newObj = " + Obj.toString());
  } else {
    newObj = Obj;
  }
  return newObj;
}

let newObj = deepClone(obj);

console.log(newObj.c === obj.c);

console.log(newObj.c.toString());

console.log(newObj.b.b1 === obj.b.b1);

newObj.b.b1[0] = 2;

console.log(newObj.b.b1);

console.log(obj.b.b1);
