
//Options - setup two arrays (one for the operators and the other for the numbers)
//Need - before anything else, get at least one number to show using addEventListener

let clear = document.querySelector("#clear");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let zero = document.querySelector("#zero");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let subtract = document.querySelector("#subtract");
let decimal = document.querySelector("#decimal");
let equal = document.querySelector("#equal");
let plus = document.querySelector("#plus");
let input = document.querySelector("#view");



clear.addEventListener("click", function() {input.innerHTML = "";});

num1.addEventListener("click", function() {input.innerHTML += '1';

});

num2.addEventListener("click", function() {input.innerHTML += '2';});

num3.addEventListener("click", function() {input.innerHTML += '3';});

num4.addEventListener("click", function() {input.innerHTML += '4';});

num5.addEventListener("click", function() {input.innerHTML += '5';});

num6.addEventListener("click", function() {input.innerHTML += '6';});

num7.addEventListener("click", function() {input.innerHTML += '7';});

num8.addEventListener("click", function() {input.innerHTML += '8';});

num9.addEventListener("click", function() {input.innerHTML += '9';});

zero.addEventListener("click", function() {input.innerHTML += '0';});

divide.addEventListener("click", function() {input.innerHTML += '/';});

multiply.addEventListener("click", function() {input.innerHTML += '*';});

subtract.addEventListener("click", function() {input.innerHTML += '-';});

decimal.addEventListener("click", function() {input.innerHTML += '.';});

equal.addEventListener("click", function() {
  let inputNumber = [];
  let inputOperation = [];
  let blankNumber = "";

  for (let i = 0; i < input.innerHTML.length; i++){
    if ((input.innerHTML[i]=== "+" )|| (input.innerHTML[i]=== "-") || (input.innerHTML[i]=== "*") ||  (input.innerHTML[i]=== "/")){
      inputOperation.push(input.innerHTML[i]);
      inputNumber.push(parseFloat(blankNumber));
      blankNumber="";
    } else {
      blankNumber += input.innerHTML[i]
    }

  }
  inputNumber.push(parseFloat(blankNumber));

if (inputOperation[0]==="+"){
  let holding = inputNumber[0] + inputNumber[1];
input.innerHTML = holding}

else if (inputOperation[0]==="*"){
  let holding = inputNumber[0] * inputNumber[1];
input.innerHTML = holding}

else if (inputOperation[0]==="-"){
  let holding = inputNumber[0] - inputNumber[1];
input.innerHTML = holding}

else if (inputOperation[0]==="/"){
  let holding = inputNumber[0] / inputNumber[1];
input.innerHTML = holding}


});

plus.addEventListener("click", function() {input.innerHTML += '+';});



// 1. first part text is showing
// 2. convert strings into equations
// 3. solve the equation




// let inputNumber = document.querySelector(".num")[0];
// let inputOperation = document.querySelector(".other")[0];
// let outputResults = document.getElementById("view")[0];
//
// console.log(inputNumber);
