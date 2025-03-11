const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    calculator.classList.add("dark");
    themeToggleBtn.classList.add("active");
  } else {
    calculator.classList.remove("dark");
    themeToggleBtn.classList.remove("active");
  }
}

applyTheme();

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (display.innerText !== "" && item.id === "equal") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else if (display.innerText === "" && item.id === "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

themeToggleBtn.onclick = () => {
  const isDark = calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};