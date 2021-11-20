

let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let symbol = document.getElementById("symbol");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let msg = document.querySelector("#msg");
let result = 0;
// this funciton is to extract values into the first and second variables.

function numAssign()
{ 
  let first = Number(num1.value);
  let second = Number(num2.value);

}

//function start() is the function that starts the ...

function start()
{
  btn1.addEventListener("click", function () {
   
    numAssign();
    result = first + second;
    msg.innerText = result;
  });
  
  btn2.addEventListener("click", () => {
    numAssign();
    result = first - second;
    msg.innerText = result;
  });
  
  btn3.addEventListener("click", () => {
    numAssign();
    result = first * second;
    msg.innerText = result;
  });
  
  btn4.addEventListener("click", () => {
    numAssign();
    result = first / second;
    msg.innerText = result;
  });
  

}

