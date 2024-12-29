const pizzaCheckBox = document.querySelectorAll(".pizzaCheckbox");
const saladCheckBox = document.getElementsByClassName("saladCheckbox");
const burgerCheckBox = document.getElementsByClassName("burgerCheckbox");
const friesCheckBox = document.getElementsByClassName("friesCheckbox");
const sandwichCheckBox = document.getElementsByClassName("sandwichCheckbox");

let numberOfItems = document.querySelectorAll(".input");
let dropdown = document.querySelectorAll(".dropdown-content");

const pizzaUnit = document.getElementById("pizzaUnit");
const saladUnit = document.getElementById("saladUnit");
const burgerUnit = document.getElementById("burgerUnit");
const friesUnit = document.getElementById("friesUnit");
const sandwichUnit = document.getElementById("sandwichUnit");
const totalAmount = document.getElementById("totalAmount");

const calcBtn = document.querySelector(".calcBtn");
const pizza = document.querySelectorAll(".pizza");
const salad = document.querySelectorAll(".salad");
const burger = document.querySelectorAll(".burger");
const sandwich = document.querySelectorAll(".sandwich");

const fries = document.querySelectorAll(".fries");
let pizzaItems = document.querySelector("#pizza");
const pizzaPrice = document.querySelector(".pizzaCost");
const saladPrice = document.querySelector(".saladCost");
const burgerPrice = document.querySelector(".burgerCost");
const sandwichPrice = document.querySelector(".sandwichCost");
const friesPrice = document.querySelector(".friesCost");

function myFunction() {
  const a = pizzaUnit.selectedIndex;

  for (let i = 0; i < pizza.length; i++) {
    if (pizza[i].checked) {
      const w = Number(pizza[i].value);
      console.log(w);
      let pizzaTotal = a * w;
      pizzaPrice.textContent = `$${Math.ceil(pizzaTotal)}`;
    }
  }

  for (let i = 0; i < salad.length; i++) {
    if (salad[i].checked) {
      const b = saladUnit.selectedIndex;
      const x = Number(salad[i].value);
      let saladTotal = b * x;
      console.log(saladTotal);
      saladPrice.textContent = `$${Math.ceil(saladTotal)}`;
    }
  }

  for (let i = 0; i < burger.length; i++) {
    if (burger[i].checked) {
      const c = burgerUnit.selectedIndex;
      const y = Number(burger[i].value);
      let burgerTotal = c * y;
      burgerPrice.textContent = `$${Math.ceil(burgerTotal)}`;
    }
  }

  for (let i = 0; i < fries.length; i++) {
    if (fries[i].checked) {
      const d = friesUnit.selectedIndex;
      const z = Number(fries[i].value);
      let friesTotal = d * z;
      friesPrice.textContent = `$${Math.ceil(friesTotal)}`;
    }
  }

  for (let i = 0; i < sandwich.length; i++) {
    if (sandwich[i].checked) {
      const d = sandwichUnit.selectedIndex;
      const z = Number(sandwich[i].value);
      let sandwichTotal = d * z;
      sandwichPrice.textContent = `$${Math.ceil(sandwichTotal)}`;
    }
  }
}

calcBtn.addEventListener("click", function () {
  const pizzaP = Number(pizzaPrice.textContent.slice(1)) || 0;
  const saladP = Number(saladPrice.textContent.slice(1)) || 0;
  const burgerP = Number(burgerPrice.textContent.slice(1)) || 0;
  const friesP = Number(friesPrice.textContent.slice(1)) || 0;
  const sandwichP = Number(sandwichPrice.textContent.slice(1)) || 0;

  const total = pizzaP + saladP + burgerP + friesP + sandwichP;

  const isAnyItemSelected =
    Array.from(pizza).some((checkbox) => checkbox.checked) ||
    Array.from(salad).some((checkbox) => checkbox.checked) ||
    Array.from(burger).some((checkbox) => checkbox.checked) ||
    Array.from(fries).some((checkbox) => checkbox.checked) ||
    Array.from(sandwich).some((checkbox) => checkbox.checked);

  if (!isAnyItemSelected) {
    alert("❌ No selections yet, Please make your selections first!");
    return; 
  }

  if (total < 200) {
    totalAmount.textContent = `$${Math.ceil(total)}.00`;
  } else {
    alert(
      "😉 Woah! Spent more than $200? You got a 15% discount on your order"
    );
    totalAmount.textContent = `$${Math.ceil(total * 0.15)}.00`;
  }

  setTimeout(() => {
    let answer = prompt(
      "Do you accept the calculated total cost of payment?, Enter 'Yes' or 'No'"
    );
    if (answer.toLowerCase() === "yes") {
      alert("Get your order shortly! Thank You ❤");
    } else {
      alert("Application Withdrawn 😑");
    }
  }, 2000);
});
