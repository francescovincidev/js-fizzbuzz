let toPrint;

// Ciclo
let square = document.querySelector(".box");
for (let i = 1; i <= 100; i++) {
    let bgColor = "";

    // Diamo alla vraiabile il valore di i
    toPrint = i;

    // SE è divisibile per 3 e 5 gli diamo il valore di "FizzBuzz"
    if(i % 3 === 0  && i % 5 === 0){
        toPrint = "FizzBuzz";
        bgColor = " red";
        

    // SE è divisibile per 3 gli diamo il valore di "Fizz"

    } else if(i % 3 === 0){
        toPrint = "Fizz";
        bgColor = " green";

    // SE è divisibile per 5 gli diamo il valore di "Buzz"

    }else if(i % 5 === 0){
        toPrint = "Buzz";
        bgColor = " yellow";

    }

    // Output
    console.log(toPrint);
    square.innerHTML += `<div class= "square${bgColor}"> ${toPrint} </div>`;
}



