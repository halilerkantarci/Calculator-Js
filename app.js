const ekran = document.querySelector(".ekran");
const tuslar = document.querySelector(".tuslar");

tuslar.addEventListener("click", (e) => {
  const element = e.target;

  if (!element.matches("button")) return;
  console.log(element);
});
