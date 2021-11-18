// const btn = document.querySelectorAll("button");
// const inputone = document.querySelector(".inputOne");
// const intputTwo = document.querySelector(".inputTwo");
// const output = document.querySelector(".output");

// btn.forEach((eachBtn) => {
//   eachBtn.addEventListener("click", (e) => {
//     console.log("hi");
//     e.preventDefault();

//     var inputValueOne = Number(inputone.value);
//     var inputValueTwo = Number(intputTwo.value);
//     console.log
//     if (e.target.textContext === "+") {
//       output.innerHTML = inputValueOne + inputValueTwo;
//     } else if (e.target.textContext === "-") {
//       output.innerHTML = inputValueOne - inputValueTwo;
//     } else if (e.target.textContext === "*") {
//       output.innerHTML = inputValueTwo * inputValueTwo;
//     } else if (e.target.textContext === "/") {
//       output.innerHTML = inputValueOne / inputValueTwo;
//     }
//   });
// });

// var a = {
//   a: "Hello world.",
//   b: 42,
// };

// var b = "a";

// console.log(a[b]);

// console.log(a["b"]);

let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let symbol = document.getElementById("symbol");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let msg = document.querySelector("#msg");

let result = 0;
btn1.addEventListener("click", function () {
  let first = Number(num1.value);
  let second = Number(num2.value);
  result = first + second;
  msg.innerText = result;
});

btn2.addEventListener("click", () => {
  let first = Number(num1.value);
  let second = Number(num2.value);
  result = first - second;
  msg.innerText = result;
});

btn3.addEventListener("click", () => {
  let first = Number(num1.value);
  let second = Number(num2.value);
  result = first * second;
  msg.innerText = result;
});

btn4.addEventListener("click", () => {
  let first = Number(num1.value);
  let second = Number(num2.value);
  result = first / second;
  msg.innerText = result;
});
