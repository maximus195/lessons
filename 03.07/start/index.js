

// function sumArr (array) {
//   let sum = 120;
//   for (let i = 0; i < array.length; i++ ) {
//     // console.log (array[i]);
//     sum = sum + array[i];
//   }
// console.log (sum);
// }

// sumArr ([1, 15, 25, 45])
// sumArr ('the one')
// sumArr (typeof 0)


function maxArray (array) {
  let max;
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] > max || !max) {
      max = array[i]
    }
  }
  console.log (max)
}

maxArray ([-10,-90,-15])