/**
 * 求菲波那切数列第 N 项
 */
// function fib(n){
//   if(n === 1) return 1;
//   if(n === 2) return 1;
//   let r = fib(n - 1) + fib(n - 2);
//   return r;
// }

// function fib(n){
//   let memo = new Map();
//   function F(n){
//     let memoN = memo.get(n);
//     if(memoN) return memoN;
//     if(n === 1 || n === 2){
//       return 1;
//     }
//     let f1 = fib(n - 1);
//     let f2 = fib(n - 2);
//     memo.set(n - 1, f1);
//     memo.set(n - 2, f2);
//     return f1 + f2;
//   }
//   return F(n);
// }

// function fib(n) {
//   let dp = [];
//   let i = 1;
//   dp[i++] = 1;
//   dp[i++] = 1;
//   while (i <= n) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     i++;
//   }
//   return dp[n];
// }

// function fib(n) {
//   let i = 2n;
//   let prev = 1n;
//   let cur = 1n;
//   while (i <= n) {
//     let temp = cur;
//     cur = prev + cur;
//     prev = temp;
//     i++;
//   }
//   return cur % 1000000007n;
// }

// function fib(n){
//   let dp = [];
//   dp[1] = 1;
//   dp[2] = 1;
//   let i = 3;
//   while(i <= n){
//     dp[i] = dp[i - 1] + dp[i - 2];
//     i++;
//   }
//   return dp[n];
// }

// function fib(n){
//   let prev = 0;
//   let cur = 1;
//   let i = 2;
//   while(i <= n){
//     let temp = cur;
//     cur = prev + temp;
//     prev = temp;
//     i++;
//   }
//   return cur;
// }

// function fib(n){
//   if(n === 1 || n === 2){
//     return 1;
//   }
//   let f1 = fib(n - 1);
//   let f2 = fib(n - 2);
//   return f1 + f2;
// }

// function fib(n){
//   let memo = new Map();
//   function F(n){
//     let memoN = memo.get(n);
//     if(memoN) return memoN;
//     if(n === 1 || n === 2){
//       memo.set(n , 1);
//       return 1;
//     }
//     let f1 = F(n - 1);
//     let f2 = F(n - 2);
//     memo.set(n - 1, f1);
//     memo.set(n - 2, f2);
//     return f1 + f2;
//   }
//   return F(n);
// }


function fib(n){
  let memo = new Map();
  function F(n){
    let memoN = memo.get(n);
    if(memoN){
      return memoN;
    }
    if(n === 1 || n === 2){
      memo.set(n, 1);
      return 1;
    }
    let f1 = F(n - 1);
    let f2 = F(n - 2);
    memo.set(n - 1, f1);
    memo.set(n - 2, f2);
    return f1 + f2;
  }
  return F(n)
}

console.log(fib(4));
