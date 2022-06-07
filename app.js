const ekran = document.querySelector(".ekran");
const tuslar = document.querySelector(".tuslar");

let ekranValue = "0";

tuslar.addEventListener("click", (e) => {
  const element = e.target;

  if (!element.matches("button")) return;
  if (element.classList.contains("operator")) {
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
  if (ekranValue === "0") {
    return (ekranValue = num);
  } else {
    return (ekranValue = ekranValue + num);
  }
}
