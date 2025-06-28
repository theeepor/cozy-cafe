const itemsData = [
  // Beverages
  {
    name: "Espresso",
    category: "beverage",
    desc: "Rich and bold artisan espresso made from fresh roasted beans.",
    price: 3.25,
    img: "https://images.unsplash.com/photo-1596952954288-16862d37405b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cappuccino",
    category: "beverage",
    desc: "Steamed milk and frothy foam topped with cocoa powder.",
    price: 4.50,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Matcha Latte",
    category: "beverage",
    desc: "Creamy matcha green tea latte served hot or iced.",
    price: 4.75,
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Iced Caramel Macchiato",
    category: "beverage",
    desc: "Layered espresso, milk, and caramel drizzle on ice.",
    price: 5.25,
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chai Latte",
    category: "beverage",
    desc: "Spiced tea concentrate with steamed milk.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // Food
  {
    name: "Avocado Toast",
    category: "food",
    desc: "Smashed avocado on toasted bread with chili flakes.",
    price: 6.75,
    img: "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ham & Cheese Croissant",
    category: "food",
    desc: "Warm, flaky croissant filled with ham and melted cheese.",
    price: 5.50,
    img: "https://plus.unsplash.com/premium_photo-1692913216191-e6de0e265b55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vegan Sandwich",
    category: "food",
    desc: "Whole grain bread stuffed with grilled veggies and hummus.",
    price: 6.25,
    img: "https://images.unsplash.com/photo-1592415499556-74fcb9f18667?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Grilled Cheese",
    category: "food",
    desc: "Golden grilled sandwich with melted cheddar inside.",
    price: 4.95,
    img: "https://plus.unsplash.com/premium_photo-1695127909043-86a3dce3f65e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bacon & Egg Bagel",
    category: "food",
    desc: "Toasted bagel with crispy bacon, egg, and cheddar.",
    price: 5.75,
    img: "https://plus.unsplash.com/premium_photo-1692833836472-91ae7369bb75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // Desserts
  {
    name: "Blueberry Muffin",
    category: "dessert",
    desc: "Fluffy muffin with fresh blueberries and crumb topping.",
    price: 3.95,
    img: "https://images.unsplash.com/photo-1722251172860-39856cdd3bcd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chocolate Cake",
    category: "dessert",
    desc: "Moist chocolate cake with creamy frosting.",
    price: 4.95,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Strawberry Tart",
    category: "dessert",
    desc: "Sweet pastry filled with custard and fresh strawberries.",
    price: 4.50,
    img: "https://images.unsplash.com/photo-1592382419341-a1ef0ddd7c8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lemon Cake",
    category: "dessert",
    desc: "Zesty lemon cake with sugary glaze on top.",
    price: 4.25,
    img: "https://images.unsplash.com/photo-1691242720281-9269de4d9f86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chocolate Chip Cookie",
    category: "dessert",
    desc: "Fresh-baked chewy cookie packed with chocolate chips.",
    price: 2.50,
    img: "https://images.unsplash.com/photo-1657418830273-40c19cfff4d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("menuModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

function renderMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item", "show");
    div.setAttribute("data-category", item.category);
    div.setAttribute("data-name", item.name.toLowerCase());

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <div class="price">$${item.price.toFixed(2)}</div>
    `;

    div.addEventListener("click", () => {
      modalImg.src = item.img;
      modalTitle.textContent = item.name;
      modalDesc.textContent = item.desc;
      modalPrice.textContent = `$${item.price.toFixed(2)}`;
      modal.style.display = "block";
    });

    menuContainer.appendChild(div);
  });
}

function filterItems() {
  const category = document.querySelector(".filter-btn.active").dataset.category;
  const keyword = searchInput.value.toLowerCase();

  const filtered = itemsData.filter(item =>
    (category === "all" || item.category === category) &&
    item.name.toLowerCase().includes(keyword)
  );

  renderMenu(filtered);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterItems();
  });
});

searchInput.addEventListener("input", filterItems);

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

renderMenu(itemsData);
