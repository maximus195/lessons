// function newCheckout(age) {
//   const result = age > 18 ? true : confirm ("Родители разрешили");
//   return result
// }

// console.log (newCheckout())

// function sumArg(age, weight, klass) {
//   const result = age + weight + klass
//   return result
// }

// sumArg()
// console.log (sumArg(50, 60, 70))

// function Kvadrat (storona1, storona2) {


//   console.log(storona1, storona2)
//   if (typeof storona1 == "number" && typeof storona2 == "number") { 
//     const result = storona1 == storona2 ? alert ("Це Квадрат") : alert ("Це не квадрат")
//     return result
//   }
//   else {
//     storona1 = prompt ("Введіть сторону 1")
//     storona2 = prompt ("Введіть сторону 2")
//     const result = storona1 == storona2 ? alert ("Це Квадрат") : alert ("Це не квадрат")

//     return "це просто текст"
//   }

// }


// console.log (Kvadrat (40,70))
// console.log (Kvadrat (20,20))
// console.log (Kvadrat())


function volume (weight, height, depth) {
  console.log (weight, height, depth)
  if (typeof weight == "number" && typeof height == "number" && typeof depth == "number") {
    const result = weight * height * depth
    return result
  }
  else {
    weight = prompt ("введіть ширину")
    height = prompt ("введіть висоту")
    depth = prompt ("введіть глибину")
    const result = weight * height * depth
    return result
  }
}

console.log (volume(40, 50, 35))
console.log (volume())



