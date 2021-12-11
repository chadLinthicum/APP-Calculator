let calcDisplay = document.getElementById("calcDisplay");

const btn_zero = document.getElementById("0");
const btn_one = document.getElementById("1");
const btn_two = document.getElementById("2");
const btn_three = document.getElementById("3");
const btn_four = document.getElementById("4");
const btn_five = document.getElementById("5");
const btn_six = document.getElementById("6");
const btn_seven = document.getElementById("7");
const btn_eight = document.getElementById("8");
const btn_nine = document.getElementById("9");
const btn_add = document.getElementById("add");
const btn_subtract = document.getElementById("subtract");
const btn_multiply = document.getElementById("multiply");
const btn_divide = document.getElementById("divide");
const btn_clear = document.getElementById("clear");
const btn_decimal = document.getElementById("decimal");
const btn_equals = document.getElementById("equals");
const btn_memAdd = document.getElementById("memAdd");
const btn_memSubtract = document.getElementById("memSubtract");
const btn_memRecall = document.getElementById("memRecall");



btn_one.addEventListener("click", event => {
  calcDisplay.append(btn_one.value);
  equationArray.push(btn_one.value);
})

btn_two.addEventListener("click", event => {
  calcDisplay.append(btn_two.value);
  equationArray.push(btn_two.value);
})

btn_add.addEventListener("click", event => {
  calcDisplay.append(btn_add.value);
})



var equationArray = [];

btn_equals.addEventListener("click", event => {
  clickButton();
})

function clickButton() {
  // console.log(this);
  console.log(equationArray)
  var add = +equationArray[0] + +equationArray[1];
  console.log(add);
}


