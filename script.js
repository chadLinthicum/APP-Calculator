let calcDisplay = document.getElementById("calcDisplay");

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

var firstNumberSelected = false;
var num1;
var num2;

document.addEventListener('click', function (e){
  if(e.target.className=="numButtons"){ // get buttons values
    calcDisplay.append(e.target.value);
  }
})

document.addEventListener('click', function(e){
  if(e.target.className=="operatorButtons"){
    if (firstNumberSelected == false) {
      if(e.target.value == "+" || "-" || "*" || "÷") {
        firstNumberSelected = true;
        num1 = calcDisplay.innerText;
        console.log(calcDisplay.innerText);
        calcDisplay.innerText = ""; 
        console.log(firstNumberSelected);
      }
    } else {
      var num2 = calcDisplay.innerText;
      var num3 = +num1 + +num2;
      calcDisplay.innerText = "";
      calcDisplay.append(num3)

    }
  }
})




// var equationArray = [];

// btn_equals.addEventListener("click", event => {
//   clickButton();
// })

// function clickButton() {
//   // console.log(this);
//   console.log(equationArray)
//   var add = +equationArray[0] + +equationArray[1];
//   calcDisplay.append(+equationArray[0] + +equationArray[1]);
//   console.log(equationArray[0] + "+" + equationArray[1] + "=" + add);
// }










// const btn_zero = document.getElementById("0");
// const btn_one = document.getElementById("1");
// const btn_two = document.getElementById("2");
// const btn_three = document.getElementById("3");
// const btn_four = document.getElementById("4");
// const btn_five = document.getElementById("5");
// const btn_six = document.getElementById("6");
// const btn_seven = document.getElementById("7");
// const btn_eight = document.getElementById("8");
// const btn_nine = document.getElementById("9");