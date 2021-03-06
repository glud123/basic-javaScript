let linkData = {
  val: 1, 
  next: {
    val: 2, //
    next: {
      val: 3, //
      next: {
        val: 4, //
        next: null
      }
    }
  }
}

// function reverseList (list){
//   let current = list;
//   let prev = null;
//   while (current !== null){
//     let next = current.next;
//     current.next = prev === null ? null : prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }


// function reverseList(list) {
//   let curr = list;
//   let prev = null;
//   while (curr !== null) {
//     let next = curr.next;
//     curr.next = prev === null ? null : prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// }

function reverseList(list) {
  let curr = list;
  let prev = null;
  while (curr !== null){
    let next = curr.next;
    curr.next = prev === null ? null : prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

console.log("reverseList===>", JSON.stringify(reverseList(linkData)))