
const burgers = [
  {
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheddar cheese, lettuce, tomato, and a sesame bun.",
    price: 28.99,
    image: "./image/burger/burger (1).jpg",
  },
  {
    name: "Bacon Burger",
    description:
      "Crispy bacon on a beef patty with smoked gouda, lettuce, tomato, and BBQ sauce.",
    price: 19.99,
    image: "./image/burger/big-tasty-burger.jpg",
  },
  {
    name: "Veggie Delight",
    description:
      "Grilled veggie patty with avocado, lettuce, tomato, and whole-grain bun.",
    price: 27.09,
    image: "./image/burger/burger.jpg",
  },
  {
    name: "Spicy Chicken Burger",
    description:
      "Crispy chicken fillet with spicy mayo, lettuce, and pickles on a brioche bun.",
    price: 18.29,
    image:
      "./image/burger/chicken-burger-wooden-board-tomato-lettuce-side-view.jpg",
  },
  {
    name: "Lamb Burger",
    description:
      "A gourmet option with a lamb patty, often flavored with herbs like rosemary and served with tzatziki sauce.",
    price: 20.49,
    image:
      "./image/burger/front-view-tasty-meat-burger-with-french-fries-dark-background.jpg",
  },
];

const stirFryDishes = [
  {
    name: "Chicken Teriyaki Stir Fry",
    description:
      "Tender chicken pieces with broccoli, carrots, and bell peppers in a savory teriyaki sauce.",
    price: 19.59,
    image: "./image/stir fry/asian-food-restaurant.jpg",
  },
  {
    name: "Beef and Broccoli Stir Fry",
    description:
      "Juicy beef slices stir-fried with fresh broccoli in a rich soy-based sauce.",
    price: 20.19,
    image: "./image/stir fry/beef-vegetables-sesame-seeds-black-bowl-wooden-table.jpg",
  },
  {
    name: "Vegetarian Stir Fry",
    description:
      "A mix of tofu, snap peas, mushrooms, and bell peppers in a flavorful sesame ginger sauce.",
    price: 18.89,
    image: "./image/stir fry/high-angle-traditional-asian-dish-with-chopsticks.jpg",
  },
  {
    name: "Shrimp Stir Fry",
    description:
      "Succulent shrimp stir-fried with zucchini, carrots, and snow peas in a garlic soy glaze.",
    price: 11.69,
    image: "./image/stir fry/high-angle-traditional-asian-meal-with-chopsticks.jpg",
  },
  {
    name: "Spicy Thai Basil Stir Fry",
    description:
      "Ground chicken or pork stir-fried with fresh Thai basil, chilies, and garlic in a spicy sauce.",
    price: 10.49,
    image: "./image/stir fry/meat-salad-mix-bell-peppers-lettuce-sesame-bbq-sauce-side-view.jpg",
  },
  {
    name: "Cashew Chicken Stir Fry",
    description:
      "Chicken chunks stir-fried with roasted cashews, bell peppers, and onions in a sweet soy sauce.",
    price: 19.49,
    image: "./image/stir fry/stir-fry-chicken-sweet-peppers-green-beans.jpg",
  },
  {
    name: "Sesame Beef Stir Fry",
    description:
      "Thinly sliced beef stir-fried with broccoli and carrots, topped with sesame seeds.",
    price: 20.49,
    image: "./image/stir fry/stir-frying-beef-with-sweet-peppers-green-beans.jpg",
  },
  {
    name: "Sweet and Sour Pork Stir Fry",
    description:
      "Crispy pork pieces stir-fried with pineapple, bell peppers, and onions in a tangy sauce.",
    price: 19.99,
    image: "./image/stir fry/udon-noodles-with-chicken-peppers-japanese-cuisine.jpg",
  },
];

const salads = [
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
    price: 16.99,
    image: "./image/salad/close-up-shot-delicious-vegan-salad-with-fresh-ingredients-plate.jpg",
  },
  {
    name: "Greek Salad",
    description:
      "Fresh tomatoes, cucumbers, olives, red onion, and feta cheese with olive oil.",
    price: 17.99,
    image: "./image/salad/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts.jpg",
  },
  {
    name: "Garden Salad",
    description:
      "A mix of fresh greens, cherry tomatoes, cucumbers, and carrots with vinaigrette.",
    price: 15.99,
    image: "./image/salad/salad-vegetables-corn-capus-greens-table.jpg",
  },
  {
    name: "Caprese Salad",
    description:
      "Sliced mozzarella, tomatoes, and fresh basil drizzled with balsamic glaze.",
    price: 28.49,
    image: "./image/salad/top-view-caesar-salad-with-shrimps-tomato-slices-glass-soft-drink.jpg",
  },
  {
    name: "Quinoa Salad",
    description:
      "Nutty quinoa with cherry tomatoes, cucumber, parsley, and lemon dressing.",
    price: 29.49,
    image: "./image/salad/vegetable-salad-with-slices-lemon-white-plate-high-quality-photo.jpg",
  },
  {
    name: "Chicken Cobb Salad",
    description:
      "Grilled chicken, bacon, avocado, hard-boiled eggs, and blue cheese on greens.",
    price: 10.99,
    image: "./image/salad/vegetables-mix.jpg",
  },
  {
    name: "Asian Sesame Salad",
    description:
      "Mixed greens with sesame-crusted chicken, mandarin oranges, and sesame dressing.",
    price: 18.99,
    image: "./image/salad/vertical-view-delicious-vegan-salad-plate-with-various-fresh-vegetables-dark-background.jpg",
  },
];

const pizzas = [
  {
    name: "Margherita",
    description:
      "Classic Italian pizza with fresh mozzarella, basil leaves, and a rich tomato sauce.",
    price: 27.99,
    image: "./image/pizza/chicken-pizza-with-bell-pepper-olives.jpg",
  },
  {
    name: "Pepperoni",
    description:
      "A timeless favorite topped with spicy pepperoni slices and melted mozzarella.",
    price: 18.99,
    image: "./image/pizza/large-mixed-pizza-with-meat.jpg",
  },
  {
    name: "BBQ Chicken",
    description:
      "Tangy BBQ sauce base topped with grilled chicken, onions, and cilantro.",
    price: 19.49,
    image: "./image/pizza/mixed-pizza-with-sliced-lemon.jpg",
  },
  {
    name: "Vegetarian",
    description:
      "Loaded with fresh veggies like bell peppers, olives, onions, mushrooms, and spinach.",
    price: 28.49,
    image: "./image/pizza/mixed-pizza-with-various-ingridients.jpg",
  },
  {
    name: "Hawaiian",
    description:
      "A sweet and savory combination of ham, pineapple, and mozzarella cheese.",
    price: 29.99,
    image: "./image/pizza/pizza-with-eggplant-tomato-topping.jpg",
  },
  {
    name: "Meat Lover's",
    description:
      "Packed with pepperoni, sausage, bacon, ham, and ground beef for the ultimate carnivore experience.",
    price: 11.99,
    image: "./image/pizza/side-view-chicken-pizza-with-tomatoes-bell-peppers-olives-tray.jpg",
  },
  {
    name: "Four Cheese",
    description:
      "A rich blend of mozzarella, parmesan, gorgonzola, and ricotta cheeses.",
    price: 10.49,
    image: "./image/pizza/side-view-pizza-with-chopped-pepper-board-cookware.jpg",
  },
  {
    name: "Spicy Buffalo Chicken",
    description:
      "Spicy buffalo sauce with grilled chicken, red onions, and a ranch drizzle.",
    price: 29.49,
    image: "./image/pizza/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware.jpg",
  },
  {
    name: "Truffle Mushroom",
    description:
      "Gourmet pizza with truffle oil, wild mushrooms, and a sprinkle of parmesan.",
    price: 12.49,
    image: "./image/pizza/top-view-sausage-pizza-with-tomato-red-bell-pepper-cheese-top-view.jpg",
  },
];

const sandwiches = [
  {
    name: "Turkey Club Sandwich",
    description:
      "Classic triple-layer sandwich with turkey, crispy bacon, lettuce, tomato, and mayo on toasted bread.",
    price: 27.19,
    image: "./image/sandwiches/club-sandwich-with-side-french-fries.jpg",
  },
  {
    name: "Grilled Cheese Sandwich",
    description:
      "Melted cheddar and mozzarella cheese between buttery, golden-brown slices of sourdough bread.",
    price: 15.49,
    image: "./image/sandwiches/club-sandwich-with-side-french-fries.jpg",
  },
  {
    name: "Italian Sub",
    description:
      "Layers of salami, ham, pepperoni, provolone cheese, lettuce, tomato, and Italian dressing on a sub roll.",
    price: 18.69,
    image: "./image/sandwiches/club-sandwich-with-side-french-fries.jpg",
  },
  {
    name: "Caprese Sandwich",
    description:
      "Fresh mozzarella, tomatoes, basil, and balsamic glaze on a crusty ciabatta roll.",
    price: 26.89,
    image: "./image/sandwiches/club-sandwich-with-side-french-fries.jpg",
  },
  {
    name: "Chicken Caesar Wrap",
    description:
      "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a soft tortilla.",
    price: 27.49,
    image: "./image/sandwiches/club-sandwich-with-side-french-fries.jpg",
  },
];

const menuList = document.querySelector("#menuList");
const container = document.querySelector(".secondTab .sessions .container");

const dishes = {
  Burger: burgers,
  "Stir Fry": stirFryDishes,
  Salad: salads,
  Pizza: pizzas,
  Sandwiches: sandwiches,
};

function displayDishes(dishArray) {
  container.innerHTML = "";

  dishArray.forEach((dish) => {
    const card = document.createElement("div");
    card.className = "getCard products";
    card.innerHTML = `
        <div class="imageContainer">
            <img src="${dish.image}" alt="${dish.name}">
        </div>
        <p class="productLabel">${dish.name}</p>
        <p class="infoNote">${dish.description}</p>
        <h4>$${dish.price.toFixed(2)}</h4>
        <button>Order Now</button>
    `;
    container.appendChild(card);
  });
}

menuList.addEventListener("click", (event) => {
  const clickedItem = event.target.closest("li");
  if (clickedItem) {
    menuList.querySelectorAll("li").forEach((item) => {
      item.style.backgroundColor = ""; 
      item.style.color = ""; 
    });

    clickedItem.style.backgroundColor = "black";
    clickedItem.style.color = "white"; 

    const selectedCategory = clickedItem.textContent.trim();
    if (dishes[selectedCategory]) {
      displayDishes(dishes[selectedCategory]);
    }
  }
});

function initializeDefaultView() {
  const firstItem = menuList.querySelector("li");
  if (firstItem) {
    firstItem.style.backgroundColor = "black";
    firstItem.style.color = "white"; 

    const defaultCategory = firstItem.textContent.trim();
    if (dishes[defaultCategory]) {
      displayDishes(dishes[defaultCategory]);
    }
  }
}

initializeDefaultView();