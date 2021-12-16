const calcDisplay = document.getElementById("calcDisplay");
const btn_memAdd = document.getElementById("memAdd");
const btn_memSubtract = document.getElementById("memSubtract");
const btn_memRecall = document.getElementById("memRecall");

let numberIsDisplayed = false;
let initialOperatorChosen = false;
let operatorJustPressed = false;
let equalsJustPressed = false;
let operatorStatus; 
let num1;
let num2;

document.addEventListener('click', function (e){
  if(e.target.className=="numButtons"){ 
    if (numberIsDisplayed == true) {
      num1 = +calcDisplay.innerText;
      calcDisplay.innerText = ""; 
      calcDisplay.append(e.target.value);
      numberIsDisplayed = false;
      operatorJustPressed = false;
    } else {
      calcDisplay.append(e.target.value);
    }
  }
})

document.addEventListener('click', (e) => {
  if(e.target.className == "operatorButtons"){
    calculate(e);
  } else if (e.target.className == "equals"){
    calculate(e);
    // equalsJustPressed = true;
  }
})

document.addEventListener('click', function (e){
  if(e.target.id=="clear"){ 
    calcDisplay.innerText = "";
    num1 = 0;
    num2 = 0;
    numberIsDisplayed = false;
    initialOperatorChosen = false;
    operatorJustPressed = false;
    equalsJustPressed = false;
  }  
})

// document.addEventListener('click', function (e){
//   if(e.target.id === "decimal"){ 
//     if (equalsJustPressed === "true") {
//       calcDisplay.append(".");
//     }else if (calcDisplay.textContent.includes(".") && operatorJustPressed == true) {
//     } else {
//       calcDisplay.append(".");
//     }
//   }
// })



function calculate(e) {
  if (initialOperatorChosen == false && operatorJustPressed == false) {
    initialOperatorChosen = true;
    operatorStatus = e.target.value; 
    num1 = calcDisplay.innerText;
    calcDisplay.innerText = ""; 
  } else if (initialOperatorChosen == true && operatorJustPressed === false){
    switch (operatorStatus) {
      case "+": 
        num2 = +num1 + +calcDisplay.innerText;
        calcDisplay.innerText = ""; 
        calcDisplay.append(num2);
        numberIsDisplayed = true;
        operatorStatus = e.target.value; 
        operatorJustPressed = true;
        break;
      case "-": 
        num2 = +num1 - +calcDisplay.innerText;
        calcDisplay.innerText = ""; 
        calcDisplay.append(num2);
        numberIsDisplayed = true;
        operatorStatus = e.target.value; 
        operatorJustPressed = true;  
        break;
      case "*": 
        num2 = +num1 * +calcDisplay.innerText;
        calcDisplay.innerText = ""; 
        calcDisplay.append(num2);
        numberIsDisplayed = true;
        operatorStatus = e.target.value; 
        operatorJustPressed = true;
        break;
      case "÷": 
        num2 = +num1 / +calcDisplay.innerText;
        calcDisplay.innerText = ""; 
        calcDisplay.append(num2);
        numberIsDisplayed = true;
        operatorStatus = e.target.value; 
        operatorJustPressed = true;
        break;
      case "=":
        console.log("monkeys");
    }  
    
    
    
    
    
    
//     if (operatorStatus == "+") {
//         num2 = +num1 + +calcDisplay.innerText;
//         calcDisplay.innerText = ""; 
//         calcDisplay.append(num2);
//         numberIsDisplayed = true;
//         operatorStatus = e.target.value; 
//         operatorJustPressed = true;
//       } else if (operatorStatus == "-") {
//         num2 = +num1 - +calcDisplay.innerText;
//         calcDisplay.innerText = ""; 
//         calcDisplay.append(num2);
//         numberIsDisplayed = true;
//         operatorStatus = e.target.value; 
//         operatorJustPressed = true;
//       } else if (operatorStatus == "*") {
//         num2 = +num1 * +calcDisplay.innerText;
//         calcDisplay.innerText = ""; 
//         calcDisplay.append(num2);
//         numberIsDisplayed = true;
//         operatorStatus = e.target.value; 
//         operatorJustPressed = true;
//       } else {
//         num2 = +num1 / +calcDisplay.innerText;
//         calcDisplay.innerText = ""; 
//         calcDisplay.append(num2);
//         numberIsDisplayed = true;
//         operatorStatus = e.target.value; 
//         operatorJustPressed = true;
//       }       
//   } else if (initialOperatorChosen == true && operatorJustPressed == true){
//     if (calcDisplay.innerHTML != ""){
//       operatorStatus = e.target.value;
//    }  
//  } 
}
}
