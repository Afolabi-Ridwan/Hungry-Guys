const container = document.querySelector('.secondTab .sessions .container');



const burgers = [
    {
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar cheese, lettuce, tomato, and a sesame bun.",
    price: 8.99,
    image: "./image/burger/burger (1).jpg"
    },
    {
    name: "Bacon Burger",
    description: "Crispy bacon on a beef patty with smoked gouda, lettuce, tomato, and BBQ sauce.",
    price: 9.99,
    image: "./image/burger/big-tasty-burger.jpg"
    },
    {
    name: "Veggie Delight",
    description: "Grilled veggie patty with avocado, lettuce, tomato, and whole-grain bun.",
    price: 7.99,
    image: "./image/burger/burger.jpg"
    },
    {
    name: "Spicy Chicken Burger",
    description: "Crispy chicken fillet with spicy mayo, lettuce, and pickles on a brioche bun.",
    price: 8.49,
    image: "./image/burger/chicken-burger-wooden-board-tomato-lettuce-side-view.jpg"
    },
    {
    name: "Lamb Burger",
    description: "A gourmet option with a lamb patty, often flavored with herbs like rosemary and served with tzatziki sauce.",
    price: 10.49,
    image: "./image/burger/front-view-tasty-meat-burger-with-french-fries-dark-background.jpg"
    },
    ];

burgers.forEach(burger => {
    const card = document.createElement('div');
    card.className = 'getCard products';
    card.innerHTML = `
        <div class="imageContainer">
            <img src="${burger.image}" alt="${burger.name}">
        </div>
        <p class="productLabel">${burger.name}</p>
        <p class="infoNote">${burger.description}</p>
        <h4>$${burger.price.toFixed(2)}</h4>
        <button>Order Now</button>
    `;
    container.appendChild(card);
});

