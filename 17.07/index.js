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

// filterFalse([20, false, 5555, 11, false])


function cutNumber (array, cutnum) {
  let result = []
  for (i = 0; i < array.length; i++) {
    if (array[i] != cutnum) {
      result.push(array[i])
    }
  }
  console.log(result)
}

// cutNumber([50, 60, 70], 60)
// cutNumber([undefined, 888, undefined, true, false, 555], undefined)
// cutNumber([undefined, 888, undefined, true, false, 555], true)
// cutNumber([undefined, 888, undefined, true, false, 555], 888)

function arraySum (array1, array2) {
  let result = []
  let isArray1bigger = array1.length > array2.length
  let minLength = isArray1bigger ? array2.length : array1.length
  let maxLength = isArray1bigger ? array1.length : array2.length

console.log (array1, array2)

  for (let i = 0; i < minLength; i++) {
    result[i] = array1[i] + array2[i];
    // console.log(result)
    console.log('for 1', i)
  }
  for (let i = minLength; i < maxLength; i++) {
    result[i] = (isArray1bigger ? array1 : array2)[i];
    // console.log(result)
    console.log('for 2', i)
  }
  console.log(result)
} 

// arraySum ([5, 6, 9], [44, 77, 88])

// arraySum ([7, 8, 9, 15], [99, 55, 33, 11])

arraySum ([7, 8, 9], [33, 11])
// arraySum ([5, 102, 12], [4, 8])
// arraySum ([100, 200, 9, 15], [33, 11])
// arraySum ([7, 8, 9, 10, 15], [33, 11, 12])
// arraySum ([7, 8, 9, 10, 15], [])
// arraySum ([], [33, 11, 12])

