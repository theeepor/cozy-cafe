const itemsData = [
  // Beverages
  {
    name: "Espresso",
    category: "beverage",
    subcategory: "hot",
    desc: "Rich and bold artisan espresso made from fresh roasted beans.",
    price: 3.25,
    img: "https://images.unsplash.com/photo-1596952954288-16862d37405b?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Cappuccino",
    category: "beverage",
    subcategory: "hot",
    desc: "Steamed milk and frothy foam topped with cocoa powder.",
    price: 4.50,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Matcha Latte",
    category: "beverage",
    subcategory: "hot",
    desc: "Creamy matcha green tea latte served hot or iced.",
    price: 4.75,
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1171&auto=format"
  },
  {
    name: "Iced Caramel Macchiato",
    category: "beverage",
    subcategory: "cold",
    desc: "Layered espresso, milk, and caramel drizzle on ice.",
    price: 5.25,
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=687&auto=format"
  },
  {
    name: "Chai Latte",
    category: "beverage",
    subcategory: "cold",
    desc: "Spiced tea concentrate with steamed milk.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?q=80&w=687&auto=format"
  },

  // Food – Sandwiches
  {
    name: "Avocado Toast",
    category: "food",
    subcategory: "sandwiches",
    desc: "Smashed avocado on toasted bread with chili flakes.",
    price: 6.75,
    img: "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?q=80&w=687&auto=format"
  },
  {
    name: "Ham & Cheese Croissant",
    category: "food",
    subcategory: "sandwiches",
    desc: "Warm, flaky croissant filled with ham and melted cheese.",
    price: 5.50,
    img: "https://plus.unsplash.com/premium_photo-1692913216191-e6de0e265b55?q=80&w=687&auto=format"
  },
  {
    name: "Vegan Sandwich",
    category: "food",
    subcategory: "sandwiches",
    desc: "Whole grain bread stuffed with grilled veggies and hummus.",
    price: 6.25,
    img: "https://images.unsplash.com/photo-1592415499556-74fcb9f18667?q=80&w=1025&auto=format"
  },
  {
    name: "Grilled Cheese",
    category: "food",
    subcategory: "sandwiches",
    desc: "Golden grilled sandwich with melted cheddar inside.",
    price: 4.95,
    img: "https://plus.unsplash.com/premium_photo-1695127909043-86a3dce3f65e?q=80&w=687&auto=format"
  },
  {
    name: "Bacon & Egg Bagel",
    category: "food",
    subcategory: "sandwiches",
    desc: "Toasted bagel with crispy bacon, egg, and cheddar.",
    price: 5.75,
    img: "https://plus.unsplash.com/premium_photo-1692833836472-91ae7369bb75?q=80&w=687&auto=format"
  },
  {
    name: "Tuna Sandwich",
    category: "food",
    subcategory: "sandwiches",
    desc: "Fresh tuna salad on whole grain bread with crisp lettuce.",
    price: 6.00,
    img: "https://plus.unsplash.com/premium_photo-1695304030158-281aa6a8204c?q=80&w=687&auto=format"
  },

  // Food – Pasta
  {
    name: "Creamy Carbonara",
    category: "food",
    subcategory: "pasta",
    desc: "Classic pasta in a rich, creamy white sauce with bacon and cheese.",
    price: 7.50,
    img: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?q=80&w=687&auto=format"
  },
  {
    name: "Spaghetti Bolognese",
    category: "food",
    subcategory: "pasta",
    desc: "Hearty pasta tossed in a slow-simmered meat sauce with herbs.",
    price: 7.95,
    img: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?q=80&w=687&auto=format"
  },
  {
    name: "Chicken Alfredo",
    category: "food",
    subcategory: "pasta",
    desc: "Fettuccine pasta in a rich Alfredo sauce with grilled chicken.",
    price: 8.50,
    img: "https://images.unsplash.com/photo-1748012199672-2a94ab9cbb19?q=80&w=764&auto=format"
  },
  {
    name: "Lasagna",
    category: "food",
    subcategory: "pasta",
    desc: "Pasta dish of Italian origin, made with broad noodles and sauce.",
    price: 5.50,
    img: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1632&auto=format"
  },

  // Food – Soup
  {
    name: "Tomato Basil Soup",
    category: "food",
    subcategory: "soup",
    desc: "Warm, comforting tomato soup garnished with fresh basil.",
    price: 4.95,
    img: "https://images.unsplash.com/photo-1620418025834-f4379baf1de9?q=80&w=687&auto=format"
  },
  {
    name: "Minestrone Soup",
    category: "food",
    subcategory: "soup",
    desc: "Vegetable-based Italian soup with pasta and beans in tomato broth.",
    price: 5.25,
    img: "https://images.unsplash.com/photo-1611068120813-eca5a8cbf793?q=80&w=687&auto=format"
  },
  {
    name: "French Onion Soup",
    category: "food",
    subcategory: "soup",
    desc: "Savory onion soup topped with melted cheese and toasted bread.",
    price: 5.95,
    img: "https://images.unsplash.com/photo-1549203438-a7696aed4dac?q=80&w=1046&auto=format"
  },

  // Desserts
  {
    name: "Blueberry Muffin",
    category: "dessert",
    desc: "Fluffy muffin with fresh blueberries and crumb topping.",
    price: 3.95,
    img: "https://images.unsplash.com/photo-1722251172860-39856cdd3bcd?q=80&w=764&auto=format"
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
    img: "https://images.unsplash.com/photo-1592382419341-a1ef0ddd7c8b?q=80&w=687&auto=format"
  },
  {
    name: "Lemon Cake",
    category: "dessert",
    desc: "Zesty lemon cake with sugary glaze on top.",
    price: 4.25,
    img: "https://images.unsplash.com/photo-1691242720281-9269de4d9f86?q=80&w=1170&auto=format"
  },
  {
    name: "Chocolate Chip Cookie",
    category: "dessert",
    desc: "Fresh-baked chewy cookie packed with chocolate chips.",
    price: 2.50,
    img: "https://images.unsplash.com/photo-1657418830273-40c19cfff4d7?q=80&w=687&auto=format"
  }
];

// Selectors
const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("menuModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

// Subcategories
const beverageSub = document.getElementById("beverageSub");
const foodSub = document.getElementById("foodSub");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    beverageSub.style.display = category === "beverage" ? "flex" : "none";
    foodSub.style.display = category === "food" ? "flex" : "none";

    clearSubcategory();
    filterItems();
  });
});

function clearSubcategory() {
  document.querySelectorAll(".sub-btn").forEach(btn => btn.classList.remove("active"));
}

document.querySelectorAll(".sub-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sub-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterItems();
  });
});

function filterItems() {
  const category = document.querySelector(".filter-btn.active")?.dataset.category || "all";
  const sub = document.querySelector(".sub-btn.active")?.dataset.sub || "";
  const keyword = searchInput.value.toLowerCase();

  const filtered = itemsData.filter(item =>
    (category === "all" || item.category === category) &&
    (!sub || item.subcategory === sub) &&
    item.name.toLowerCase().includes(keyword)
  );

  renderMenu(filtered);
}

function renderMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item show";
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

// Modal close
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
searchInput.addEventListener("input", filterItems);
renderMenu(itemsData);
