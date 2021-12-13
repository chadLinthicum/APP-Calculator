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

var firstNumberStored = false;
var secondNumberStored = false;
var numberIsDisplayed = false;
var operatorStatus; 
var num1;
var num2;


document.addEventListener('click', function (e){
  if(e.target.className=="numButtons"){ // get buttons values
    if (numberIsDisplayed == true) {
      calcDisplay.innerText = ""; 
      calcDisplay.append(e.target.value);
      numberIsDisplay = false;
    } else {
    calcDisplay.append(e.target.value);
    }
  }
})

document.addEventListener('click', function(e){
  if(e.target.className=="operatorButtons"){
    if (firstNumberStored == false) {
      if(e.target.value == "+" || "-" || "*" || "÷") {
        firstNumberStored = true;
        operatorStatus = e.target.value;
        num1 = calcDisplay.innerText;
        console.log(calcDisplay.innerText);
        calcDisplay.innerText = "";         
        console.log("firstNumberSelected is " + firstNumberStored);
        console.log("operatorStatus is " + operatorStatus);
      }
    } else {
      var num2 = calcDisplay.innerText;
      var newNumber = +num1 + +num2;
      calcDisplay.innerText = "";
      calcDisplay.append(newNumber);
      secondNumberStored = true;
      num1 = newNumber;
      numberIsDisplayed = true;
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