function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function mult(number1, number2) {
  return number1 * number2;
}

function div(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));





const result = add(number1, number2);
const resultSub = subtract(number1, number2);
const resultMult = mult(number1, number2);
const resultDiv = div(number1, number2);



messageResult = "added =" + result + "; Subtracted =" + resultSub + "; Multiplied =" + resultMult + "; Divided =" + resultDiv;
alert(messageResult);


