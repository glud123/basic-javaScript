/**
 * @param {Function} executor 执行函数
 */
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function promise(executor) {
  // 初始状态
  this.status = PENDING;
  // 初始值
  this.result = null;
  // 异步场景下存储多个成功回调
  this._fulfilledCallbacks = [];
  // 异步场景下存储多个失败回调
  this._rejectedCallbacks = [];

  function resolve(value) {
    if (this.status === PENDING || this.status === REJECTED) {
      this.status = FULFILLED;
      this.result = value;
      let _fulfilledCallback;
      while ((_fulfilledCallback = this._fulfilledCallbacks.shift())) {
        this.result = _fulfilledCallback(this.result);
      }
    }
  }
  function reject(value) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.result = value;
      for (let index = 0; index < this._rejectedCallbacks.length; index++) {
        const _rejectedCallback = this._rejectedCallbacks[index];
        // 保持成功回调的队列与失败回调的队列一致
        this._fulfilledCallbacks.shift();
        if (typeof _rejectedCallback === "function") {
          this.result = _rejectedCallback(this.result);
          // 异步场景下第一个 then 中失败的回调的返会结果，传递给下一个 then 中成功的回调
          resolve.call(this, this.result);
          break;
        }
      }
    }
  }
  try {
    executor(resolve.bind(this), reject.bind(this));
  } catch (e) {
    // 执行函数报错时，直接抛出错误给 reject 函数
    reject(e);
  }
}
/**
 * promise then 属性
 * @param {Function} onFulfilled 成功的回调
 * @param {Function} onRejected 失败的回调
 */
Object.defineProperty(promise.prototype, "then", {
  value: function (onFulfilled, onRejected) {
    if (this.status === PENDING) {
      this._fulfilledCallbacks.push(onFulfilled);
      this._rejectedCallbacks.push(onRejected);
      return this;
    }
    if (this.status === FULFILLED) {
      this.result = onFulfilled(this.result);
      return new promise((resolve, reject) => {
        resolve(this.result);
      });
    }
    if (this.status === REJECTED) {
      if (typeof onRejected === "function") {
        this.result = onRejected(this.result);
        return new promise((resolve, reject) => {
          resolve(this.result);
        });
      } else {
        return new promise((resolve, reject) => {
          reject(this.result);
        });
      }
    }
  },
});

/**
 * promise catch 属性
 * @param {Function} onRejected 失败的回调
 */
Object.defineProperty(promise.prototype, "catch", {
  value: function (onRejected) {
    if (this.status === REJECTED) {
      onRejected(this.result);
    }
    if (this.status === PENDING) {
      this._rejectedCallbacks.push(onRejected);
    }
  },
});

let a = new promise((resolve, reject) => {
  console.log("p->resolve");
  // resolve("r1");
  // reject("r1");
  setTimeout(() => {
    // resolve("r1");
    reject("r1");
  }, 3000);
})
  .then(
    (value) => {
      console.log("p->", value);
      return "f2";
    },
    (value) => {
      console.log("p->", value);
      return "r2";
    }
  )
  .then((val) => {
    console.log("p->", val);
    return "f3";
  })
  .then((value) => {
    console.log("p->", value);
  })
  .catch((value) => {
    console.log("catch", value);
  });
