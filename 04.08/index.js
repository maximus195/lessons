
// function arraySum (array1, array2) {
//   let result = []
//   let isArray1bigger = array1.length > array2.length
//   let minLength = isArray1bigger ? array2.length : array1.length
//   let maxLength = isArray1bigger ? array1.length : array2.length

// console.log (array1, array2)

//   for (let i = 0; i < minLength; i++) {
//     result[i] = array1[i] + array2[i];
//     // console.log(result)
//     console.log('for 1', i)
//   }
//   for (let i = minLength; i < maxLength; i++) {
//     result[i] = (isArray1bigger ? array1 : array2)[i];
//     // console.log(result)
//     console.log('for 2', i)
//   }
//   console.log(result)
// } 


// arraySum ([7, 8, 9], [33, 11])
// // arraySum ([5, 102, 12], [4, 8])
// // arraySum ([100, 200, 9, 15], [33, 11])
// // arraySum ([7, 8, 9, 10, 15], [33, 11, 12])
// // arraySum ([7, 8, 9, 10, 15], [])
// // arraySum ([], [33, 11, 12])

// function Adult (age, yes, no) {
//   if  (age > 18 ) {
//     yes()
//   } else {
//     no()
//   }
// }

// Adult ( 
//   prompt("Введіть число"),
//   function () { 
//     console.log ("Ти дорослий"); 
//     alert ("Ти дорослий") 
//   },
//   function () { 
//     console.log ("Ти підліток"); 
//     alert ("Ти підліток") 
//   }
// )

document.querySelector("h1").addEventListener (
  "dubleclick",
  function () {
    console.log ("Ти натиснув на h1")
  }
)



