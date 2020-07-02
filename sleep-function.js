/**
 * 睡眠函数
 */

// async function sleep(){
//   await new Promise((resolve)=>{
//     setTimeout(resolve, 5000);
//   }).then(() =>{
//     console.log("111")
//   });
//   console.log("222");
// }

// sleep();

// async function sleep(){
//   let a = await new Promise((resolve, reject)=>{
//     setTimeout(resolve, 5000);
//   }).then(()=>{
//     return 111;
//   });
//   console.log(a);
//   console.log(222)
// }

async function sleep(fn1,fn2){
  let result = await new Promise((resolve)=>{
    setTimeout(resolve, 5000);
  }).then(fn1);
  fn2(result);
}
const f1 = ()=>{
  console.log(111);
  return 222;
}
const f2 = (a)=>{
  console.log(a);
}
sleep(f1, f2);