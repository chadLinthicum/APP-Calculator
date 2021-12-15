const calcDisplay = document.getElementById("calcDisplay");
const btn_memAdd = document.getElementById("memAdd");
const btn_memSubtract = document.getElementById("memSubtract");
const btn_memRecall = document.getElementById("memRecall");
const btn_clear = document.getElementById("clear");
const btn_decimal = document.getElementById("decimal");
const btn_equals = document.getElementById("equals");

var firstNumberStored = false;
var secondNumberStored = false;
var numberIsDisplayed = false;
var initialOperatorChosen = false;
var operatorJustPressed = false
var decimalJustPressed = false;
var operatorStatus; 
var num1;
var num2;

document.addEventListener('click', function (e){
  if(e.target.className=="numButtons"){ // get buttons values
    if (numberIsDisplayed == true) {
      num1 = calcDisplay.innerText;
      calcDisplay.innerText = ""; 
      calcDisplay.append(e.target.value);
      numberIsDisplayed = false;
      operatorJustPressed = false;
    } else {
      calcDisplay.append(e.target.value);
    }
  }
})

document.addEventListener('click', function(e){
  if(e.target.className=="operatorButtons"){
    if (initialOperatorChosen == false && operatorJustPressed == false) {
      initialOperatorChosen = true;
      operatorStatus = e.target.value; 
      num1 = calcDisplay.innerText;
      calcDisplay.innerText = ""; 
    } else if (initialOperatorChosen == true && operatorJustPressed == false){
        if (operatorStatus == "+") {
          num2 = +num1 + +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
        } else if (operatorStatus == "-") {
          num2 = +num1 - +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
        } else if (operatorStatus == "*") {
          num2 = +num1 * +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
        } else {
          num2 = +num1 / +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
        }       
    } else if (initialOperatorChosen == true && operatorJustPressed == true){
      if (calcDisplay.innerHTML != ""){
        operatorStatus = e.target.value;
      }  
    } 
  }
})


document.addEventListener('click', function (e){
  if(e.target.id=="clear"){ // get buttons values
    calcDisplay.innerText = "";
    num1 = 0;
    num2 = 0;
  }  
})

document.addEventListener('click', function (e){
  if(e.target.id=="decimal"){ // get buttons values
    if (decimalJustPressed == false) {
    calcDisplay.append(".");
    decimalJustPressed = true;
    } else {
    }
  }
})

