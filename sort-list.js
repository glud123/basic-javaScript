let arrayData = [37, 38, 39, 20, 43, 45, 18, 23, 16, 18];

/**
 * 冒泡排序
 * @param {*} params
 */
// function bubbleSort(array) {
//   let l = array.length >>> 0;
//   for (let i = 0; i < l; i++) {
//     for (let j = 0; j < l - 1 - i; j++) {
//       const fItem = array[j];
//       const sItem = array[j + 1];
//       if (fItem > sItem) {
//         let temp = fItem;
//         array[j] = sItem;
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// console.log("bubbleSort===>", bubbleSort(arrayData));

/**
 * 选择排序
 * @param {*} params
 */
// function selectionSort(array) {
//   let l = array.length >>> 0;
//   let minIndex, temp;
//   for (let i = 0; i < l; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < l; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = array[i];
//     array[i] = array[minIndex];
//     array[minIndex] = temp;
//   }
//   return array;
// }

// console.log("selectionSort===>", selectionSort(arrayData));

/**
 * 插入排序
 * @param {*} params
 */
// function insertionSort(array) {
//   let l = array.length >>> 0;
//   for (let i = 0; i < l; i++) {
//     let currentItem = array[i];
//     let preIndex = i - 1;
//     while (preIndex >= 0 && currentItem < array[preIndex]){
//       array[preIndex + 1] = array[preIndex];
//       preIndex--;
//     }
//     array[preIndex + 1] = currentItem;
//   }
//   return array;
// }

// console.log("insertionSort===>", insertionSort(arrayData));

function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

console.log("shellSort===>", shellSort(arrayData));
