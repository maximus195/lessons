

document.addEventListener("DOMContentLoaded", function() {

    const body = document.querySelector("body")
    body.style.backgroundColor = "#8cffd7",
    body.style.color = "#305d44"
    
    function addH1(text) { 
        body.innerHTML = body.innerHTML + '<h1>' + text + '</h1>'
    }
    function addPar(textP) {
        body.innerHTML = body.innerHTML + '<p>' + textP + '</p>' + '<br>'
    }
    function adddiv(text) {
        body.innerHTML = body.innerHTML + '<div>' + text + '</div>'
    }

    function Start2(text, containerType) {
        if(containerType === 'h1') {
            addH1(text)
        } else if (containerType === 'div') {
            
            adddiv(text)
        } else{
            addPar(text)
        }

        
    }

    function School2(age) {
        if (age < 3) {
            alert ("Hellow baby")
        }
        else if (age < 18) {
            alert ("Hello")
        }
        else if (age < 100) {
            alert ("Good morning")
        } else {
            alert ("Hello old man")
        }

    }

    let speed = prompt ("Enter your speed")
    // let message = speed > 120 ? "too fast" : "ok"
    let message = speed > 120 ? "to fast" : speed > 80 ? "fast" : speed > 40 ? "normal" : "to low"
    alert (message)
    console.log (message)



for (i = 10; i <= 20; i++) {
    console.log(i)
}


let spring = 0

while(spring < 50) {

    console.log(spring)
    spring = spring +0.5;

}





    // const carYear = 1997
    // const isOld = (2020 - carYear) > 20 ? "car is old" : false
    // console.log (carYear, isOld)

    // var a = 5, b = 10, c = "5";
    // var x = a;



    
    // function School(text, age) {
    //     if (age >= 18) {
    //         alert(text + age)
    //     }
    // }

    // body.innerHTML = "<h1>Created by JS</h1>"

    // body.innerHTML = "<h1>Hello world</h1>"
    // body.innerHTML = body.innerHTML + "<h1>Created by JS</h1>"

    // addH1("hello")
    // addPar("lorem ipsum lorem ipsum")

    // addH1("people")
    // addPar("more more text more more text")

    // addH1("peace")
    // addPar("I need more crazy fonts I need more crazy fonts")

    // Start2 ("Hello People")

    // Start2 ("Hello People")

    // Start2 ("Yellow sub", "div")

    // Start2 ("Lorem ipsum", "h1")

    // School ("Your age", 22)
    // School ("Your age", 18)
    // School ("Your age", 17)
    // School2 (17)

});


