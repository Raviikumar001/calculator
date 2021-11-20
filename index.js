

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
let first=0;
let second=0;
let operation = null;
function numAssign()
{ 
   first = Number(num1.value);
   second = Number(num2.value);

}

//function start() is the function that starts the ...

function start()
{
  btn1.addEventListener("click", function () {
   console.log("hi")
    numAssign();
    
    operation="+";

    calc();
  });
  
  btn2.addEventListener("click", () => {
    numAssign();
    
    operation="-";
    calc();
  });
  
  btn3.addEventListener("click", () => {
    numAssign();
    
    operation="*";
    calc();
  });
  
  btn4.addEventListener("click", () => {
    numAssign();
    
    operation="/";
    calc();
  });
  

}

start();

function calc(){
  if(operation==="+")
  {
    result=first+second;
    msg.innerText=result;
  }
  if(operation==="-")
  {
    result=first-second;
    msg.innerText=result;
  }
  if(operation==="*")
  {
    result=first*second;
    msg.innerText=result;
  }
  if(operation==="/")
  {
    result=first/second;
    msg.innerText=result;
  }
  
}
num1.addEventListener("change",(e)=>{
  first=Number(e.target.value);
  if(operation!==null)
  {
    calc();
    }  


})

num2.addEventListener("change",(e)=>{
  second=Number(e.target.value);
  if(operation!==null)
  {
    calc();
    }  


})