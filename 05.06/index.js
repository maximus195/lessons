function Show (text) {
  for (let a = 0; a < 100; a++) {
    console.log(text)
  }
}

Show ('a')
Show ('b')
Show ('c')



let number = +prompt('Введіть число між 0 і 3')
switch (number) {
    case 0 :
      alert ('ви ввели 0')
      break;
    case 1 :
      alert ('ви ввели 1')
      break;
    case 2 :
    case 3 :
      alert ('ви ввели 2 або 3')
}

function showMessage(from = 12, text = "текст не добавлен") { 
  alert( from + ": " + text ); 
} 
 
showMessage();