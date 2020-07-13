
// function maxArray (array) {
//   let max;
//   for (let i = 0; i < array.length; i++ ) {
//     if (array[i] > max || !max) {
//       max = array[i]
//     }
//   }
//   console.log (max)
// }

// maxArray ([-10,-90,-15])


// function minArray (array) {
//   let min;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min || !min) {
//       min = array[i]
//     }
//   }
//   console.log (min)
// }

// minArray ([-10, 0 , -40])


// function arrayToString (array) {
//   let result = '';
//   for (let i = 0; i < array.length; i++) {
//     console.log (result);
//     result = result + (i == 0 ? '' : ', ') + array[i]
//   }
//   console.log (result)
// }

// arrayToString (['one', 'two', 'tree', 'four']);


// function lastArray (array) {
//   let last = array [array.length-1]
//   console.log (last)
// }

// lastArray ([12, 14, 16, 200])

// function ArrayPlus (array1, array2) {
//   let resultArray = []
//   for (let i = 0; i < array1.length; i++) {
//     // console.log(1, resultArray)
//     resultArray.push(array1[i])
//   }
//   for (let i = 0; i < array2.length; i++) {
//     // console.log(2, resultArray)
//     resultArray.push(array2[i])
//   }
//   console.log(resultArray)
// }

// ArrayPlus ([15, 20, 35, 44], [88, 99, 77, 95])


function filterFalse (array) {
  let result = []
  for (i = 0; i < array.length; i++) {
    // if (array[i] == false) {
    // }
    // else {
    //   result.push(array[i])
    // }
    if (array[i] != false) {
      result.push(array[i])
    }
  }
  console.log(result)
}

filterFalse([20, false, 5555, 11, false])