
let names = document.querySelector("h1.name");
names.innerHTML = "waliusuby";
names.innerHTML = "omo sakus";
let courseTitle = document.getElementById("course-title");
courseTitle.innerHTML = "suby";
names.textContent = "maami"
names.innerHTML = "Waliyulahi Subair";
courseTitle.innerHTML = "Frontend Development";
let logo = document.querySelector("h1.logo");
const toggleBtn = document.getElementById("menu");
const navLinks = document.querySelector("navlinks");
toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


console.log(names.innerHTML);
let namechanged = (names.innerHTML = "Waliyulahi Subair");
console.log(namechanged);
console.log(names);


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const Result = document.getElementById("result");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
const raiseBtn = document.getElementById("raiseBtn");


addBtn.addEventListener("click", function () {
  let sum = Number(num1.value) + Number(num2.value);
  result.innerHTML = `The sum is ${sum}`;
});
subBtn.addEventListener("click",function(){
  let diffrence = Number(num1.value) - Number (num2.value);
  result.innerHTML = `The diffrence is ${diffrence}`;
  

});

mulBtn.addEventListener("click",function(){
  let total = Number(num1.value) * Number (num2.value);
  result.innerHTML = `the total is ${total}`;
  

});

divBtn.addEventListener("click",function(){
  let div = Number(num1.value) / Number (num2.value);
  result.innerHTML = `The division is ${div}`;
  

});

raiseBtn.addEventListener("click",function(){
  let power = Number(num1.value) ** Number (num2.value);
  result.innerHTML = `The power is ${power}`;

});
