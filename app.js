const ekran = document.querySelector(".ekran");
const tuslar = document.querySelector(".tuslar");

let ekranValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

tuslar.addEventListener("click", (e) => {
  const element = e.target;

  if (!element.matches("button")) return;
  if (element.classList.contains("operator")) {
    handleOperator(element.value);
    updateEkran();
    return;
  }

  if (element.classList.contains("decimal")) {
    inputDecimal();
    updateEkran();
    return;
  }
  if (element.classList.contains("clear")) {
    clear();
    updateEkran();
    return;
  }
  inputNumber(element.value);
  updateEkran();
  console.log(element);
});

function updateEkran() {
  ekran.value = ekranValue;
}
function inputDecimal() {
  if (!ekranValue.includes(".")) {
    ekranValue += ".";
  }
}
function clear() {
  ekranValue = "0";
}

function inputNumber(num) {
  if (waitingForSecondValue) {
    ekranValue = num;
    waitingForSecondValue = false;
  } else {
    ekranValue = ekranValue === "0" ? num : ekranValue + num;
  }

  console.log(ekranValue, firstValue, operator, waitingForSecondValue);
}

function handleOperator(nextOperator) {
  const value = parseFloat(ekranValue);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);

    ekranValue = `${parseFloat(result.toFixed(7))}`;
    firstValue = result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;

  console.log(ekranValue, firstValue, operator, waitingForSecondValue);
}

function calculate(first, second, operator) {
  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "*") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  }
  return second;
}
