const itemsData = [
  // Beverages
  {
    name: "Americano",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "made by adding hot water to espresso, resulting in a balanced and milder taste that's similar in strength to drip coffee.",
    price: 3.25,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Cafe Latte",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "An espresso-based coffee drink made with steamed milk and a light layer of foam on top",
    price: 4.50,
    img: "https://images.unsplash.com/photo-1582076174004-d66a1311d411?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FmJUMzJUE5JTIwbGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Cappuccino",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "An Italian coffee drink made with equal parts espresso, steamed milk, and milk foam.",
    price: 4.75,
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
  },
  {
    name: "Iced chocolate oatmilk espresso",
    category: "beverage",
    subcategory: "espresso blend",
    desc: "A shaken coffee beverage that combines blonde espresso with creamy oatmilk and a chocolate flavor, such as mocha or cocoa syrup",
    price: 5.25,
    img: "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SWNlZCUyMGNob2NvbGF0ZSUyMG9hdG1pbGslMjBlc3ByZXNzb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Vanilla Latte",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "An espresso-based drink made with a shot of espresso, steamed milk, and vanilla syrup or extract, which can be served hot or iced.",
    price: 4.20,
    img: "https://media.istockphoto.com/id/639325056/photo/hot-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=fEF69H921RGmG3pU7sk_laNIe4IjLMYvzODg3vc0bzM="
  },
  {
    name: "Mocha",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "An espresso-based coffee drink made with chocolate, steamed milk, and espresso.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=853"
  },
  {
    name: "Caramel Macchiato",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "A coffee drink made with steamed milk, vanilla syrup, and espresso, topped with a caramel drizzle.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
  },
  {
    name: "Hazelnut Latte",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "A comforting coffee drink made with rich espresso, steamed milk, and the sweet, nutty flavor of hazelnut syrup.",
    price: 4.20,
    img: "https://media.istockphoto.com/id/1247810487/photo/diverse-keto-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=9tfrfXIe2NMPaith4AixvMHhVI-cPKHMaESh9ZcJ1-c="
  },
  {
    name: "Matcha Latte",
    category: "beverage",
    subcategory: "hot/iced",
    desc: "A creamy, vibrant green beverage made from finely ground green tea powder (matcha), hot water, and frothed milk, often served hot or iced.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Iced Vanilla Oatmilk Espresso",
    category: "beverage",
    subcategory: "espresso blend",
    desc: "A chilled beverage with blonde espresso, a hint of caramelized or vanilla, and oat milk, shaken with ice to create a frothy, layered texture.",
    price: 4.20,
    img: "https://media.istockphoto.com/id/1863533120/photo/coffee-beans-fresh-milk-and-milk-coffee-are-served-in-glass-cups-on-a-wooden-table-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3TOBUUocIMvLpPx2q63G1bcxx80B3qZSmw1h30JCCY="
  },
  {
    name: "Iced Cinnamon almond milk macchiato",
    category: "beverage",
    subcategory: "espresso blend",
    desc: "A layered coffee drink made with espresso, almond milk, and cinnamon dolce syrup, topped with a caramel drizzle and cinnamon.",
    price: 4.20,
    img: "https://images.unsplash.com/photo-1724198218799-2ecb9442fba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEljZWQlMjBDaW5uYW1vbiUyMGFsbW9uZCUyMG1pbGslMjBtYWNjaGlhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Java Chip",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A type of chocolatey, cookie-like crumb, often used in blended drinks like the Starbucks Java Chip Frappuccino.",
    price: 4.20,
    img: "https://www.julieseatsandtreats.com/wp-content/uploads/2022/05/Java-Chip-Frapp-26-of-32.jpg"
  },
   {
    name: "Chocolate cookie crumble",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A sweet, crumbly topping or component made from crushed chocolate cookies, often blended with other ingredients like graham crackers or a fudge mixture.",
    price: 4.20,
    img: "https://coffeecopycat.com/wp-content/uploads/2024/09/MochaCookieCrumbleFrappuccino4-1200x1800-1.jpg"
  },
  {
    name: "White Mocha",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A coffee drink made with espresso, white chocolate sauce or syrup, and steamed milk.",
    price: 4.20,
    img: "https://cdn.shopify.com/s/files/1/0648/9423/8941/files/whitemocha_finish_1600x900_1.jpg?v=1701141087"
  },
  {
    name: "Double chocolate",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A rich, decadent, and creamy beverage that blends bold coffee flavors with an intense, double dose of chocolate.",
    price: 4.20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2MUB1QCAY4RxlTgFpUgOVyoKlsAkV_0jNw&s"
  },
  {
    name: "Chocolate Chips",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A coffee beverage that incorporates the rich, sweet flavor of chocolate chips.",
    price: 4.20,
    img: "https://www.webstaurantstore.com/images/products/large/107060/2070899.jpg"
  },
  {
    name: "Chocolate Mocha",
    category: "beverage",
    subcategory: "iced blended",
    desc: "An espresso-based coffee drink with steamed milk and chocolate, combining the rich, bold flavor of coffee with the sweetness of chocolate.",
    price: 4.20,
    img: "https://www.thespruceeats.com/thmb/Hz677yfVdPECquUOekjv0b9yXTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-step-04-599987714aec41aba02f1f870e900dd8.jpg"
  },
  {
    name: "Caramel",
    category: "beverage",
    subcategory: "iced blended",
    desc: "A frozen, slushy beverage made from coffee, milk, ice, and caramel sauce, often blended with vanilla flavoring.",
    price: 4.20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVE_mhhXnEl6f1H1jnt48N2e4HiWOYH8CkgQ&s"
  },
  {
    name: "Honey Lemon Tea",
    category: "beverage",
    subcategory: "tea",
    desc: "A warm, soothing drink made from a blend of hot water, honey, and lemon juice.",
    price: 4.20,
    img: "https://www.allrecipes.com/thmb/AfkuLKjKkti602iC7E2xUhmYEYc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/56445-honey-lemon-tea-ddmfs-hero-4x3-2902-8ebd5ce46c984980ae39ce07b4bc43cc.jpg"
  },
 {
    name: "Ginger Tea",
    category: "beverage",
    subcategory: "tea",
    desc: "A herbal beverage made by steeping fresh or ground ginger in hot water.",
    price: 4.20,
    img: "https://media.post.rvohealth.io/wp-content/uploads/2022/02/ginger-tea-cup-732-549-feature-thumb.jpg"
  },
 {
    name: "Earl Grey",
    category: "beverage",
    subcategory: "tea",
    desc: "A popular black tea blend flavored with the oil of bergamot, a fragrant citrus fruit.",
    price: 4.20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhbepoO2EqxnIB0OrzX_nnm3zwn_74HOJhA&s"
  },
 {
    name: "Chamomile Tea",
    category: "beverage",
    subcategory: "tea",
    desc: "A caffeine-free herbal infusion made from dried, daisy-like flowers of the chamomile plant, known for its soothing, calming, and apple-like flavor and aroma.",
    price: 4.20,
    img: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/chamomile-tea.jpg?w=1155&h=1528s"
  },
  {
    name: "English Breakfast",
    category: "beverage",
    subcategory: "tea",
    desc: "A robust, full-bodied blend of black teas, most commonly from Assam, Ceylon, and Kenya.",
    price: 4.20,
    img: "https://cdn.shopify.com/s/files/1/0615/9253/5282/files/Products_Signature_English_Breakfast_Horizontal_sz_1024x1024.jpg?v=1668614190"
  },
  {
    name: "Green tea lemonade",
    category: "beverage",
    subcategory: "refreshing drinks",
    desc: "A refreshing beverage made by combining brewed green tea with lemon juice and a sweetener, served over ice.",
    price: 3.20,
    img: "https://www.pipercooks.com/wp-content/uploads/2022/06/green-tea-lemonade-sq.jpg"
  },

  // Food – Sandwiches
  {
    name: "Kaya Toast",
    category: "food",
    subcategory: "sandwiches",
    desc: "Fresh kaya spread with crisy bread toast.",
    price: 3.00,
    img: "https://media.istockphoto.com/id/507642818/photo/kaya-toast.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2u70B6EXTZKe0NmguR8vRBmQPkJdtEKo_p9gLaueY0="
  },
  {
    name: "Club Sandwhich",
    category: "food",
    subcategory: "sandwiches",
    desc: "A double-decker sandwich made with three slices of toasted bread, layered with ingredients like poultry, bacon, lettuce, tomato, and mayonnaise.",
    price: 3.00,
    img: "https://media.istockphoto.com/id/1075995530/photo/delicious-toast-sandwich-with-ham-cheese-egg-and-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=uSaJT6aettTaV38Lu-uOwqG8C7zhWpmq2-egkHPjcl8="
  },
  {
    name: "Cheesy ham and Egg",
    category: "food",
    subcategory: "sandwiches",
    desc: "A savory and filling dish featuring cooked ham and eggs with melted cheese.",
    price: 3.00,
    img: "https://plus.unsplash.com/premium_photo-1663854478286-4313b556a12e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
  },
  {
    name: "Hub Burger",
    category: "food",
    subcategory: "sandwiches",
    desc: "A savory and filling dish featuring cooked ham and eggs with melted cheese.",
    price: 3.00,
    img: "https://www.joyousapron.com/wp-content/uploads/2018/05/IMG_3093-2.jpg"
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
  {
    name: "Pasta Prawn",
    category: "food",
    subcategory: "pasta",
    desc: "Pasta tossed with prawns in various sauces, most commonly creamy garlic, tomato, or a lemon-based sauce",
    price: 5.50,
    img: "https://media.istockphoto.com/id/1263094032/photo/spaghetti-with-prawns-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFLPI86GVB46qfK04eMww6QZ9gWpw5h8iZCPRGZXTK0="
  },
  {
    name: "Cheesy Spaghetti with Meatballs",
    category: "food",
    subcategory: "pasta",
    desc: "A hearty, classic Italian-American comfort food dish featuring a generous topping of melted cheese over tender meatballs, a rich tomato sauce, and al dente spaghetti.",
    price: 5.50,
    img: "https://media.istockphoto.com/id/1124469058/photo/healthy-vegetarian-meatball-with-spaghetti.webp?a=1&b=1&s=612x612&w=0&k=20&c=PXvDp5wiT5n2_7NJW_jcksL8-xC6vVdjb5TP-6pfnRo="
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

  // Food – Finger Foods
  {
    name: "Truffle Fries",
    category: "food",
    subcategory: "finger foods",
    desc: "A gourmet version of classic French fries, elevated with the distinct, luxurious flavor of truffles.",
    price: 3.25,
    img: "https://media.istockphoto.com/id/1867541332/photo/close-up-of-french-fries-with-cheese-and-black-truffle-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=az5dZZ95EJBIBKF97gI64PpW67pFfhwNQqTV6GuZoTE="
  },
  {
    name: "Nachos",
    category: "food",
    subcategory: "finger foods",
    desc: "A dish made of tortilla chips covered in melted cheese or cheese sauce, with other popular toppings such as meat, jalapeños, salsa, guacamole, and sour cream.",
    price: 4.25,
    img: "https://images.unsplash.com/photo-1734769975334-e42a3be8714d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
  },
  {
    name: "Ebi Fry",
    category: "food",
    subcategory: "finger foods",
    desc: "Japanese deep-fried dish where large shrimp (ebi) are coated in breadcrumbs and fried to golden perfection.",
    price: 2.25,
    img: "https://media.istockphoto.com/id/2209549342/photo/close-up-of-deep-fried-tempura-shrimps-with-soy-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=1dXDtjE1RhN1YhE95eec-q6dNp2NTQg1UOPJf4a7wD8="
  },
  {
    name: "Popcorn Chicken",
    category: "food",
    subcategory: "finger foods",
    desc: "A bite-sized pieces of seasoned chicken that are coated in flour or breading and deep-fried until golden brown and crispy.",
    price: 2.25,
    img: "https://images.unsplash.com/photo-1615435312366-2e4ae52255e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386"
  },

  // Food – All Day Breakfast
  {
    name: "Pancake Egg and Bacon",
    category: "food",
    subcategory: "all day breakfast",
    desc: "A hearty and comforting meal that combines sweet and savory flavors with a mix of textures.",
    price: 2.25,
    img: "https://media.istockphoto.com/id/533645537/photo/breakfast-with-bacon-eggs-pancakes-and-toast.webp?a=1&b=1&s=612x612&w=0&k=20&c=5ao8-FmcR-a8DQvzBSM1_HewhQWzMQWKRsfoSvM0f_A="
  },
  {
    name: "Egg Benedict",
    category: "food",
    subcategory: "all day breakfast",
    desc: "Featuring two poached eggs and Canadian bacon (or ham) on halves of an English muffin, all topped with rich and creamy hollandaise sauce.",
    price: 2.25,
    img: "https://media.istockphoto.com/id/1154608812/photo/eggs-benedict-with-black-forest-ham-and-hash-browns-on-grilled-french-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=JyKQwm42YvScXbXzkD_nxf622bYp6agf17Dwam_JDgE="
  },
  {
    name: "Big Breakfast",
    category: "food",
    subcategory: "all day breakfast",
    desc: "a large, hearty meal that varies by region but commonly includes eggs, meat (like bacon or sausage), toast or fried bread, and other cooked items like tomatoes, mushrooms, and baked beans.",
    price: 4.25,
    img: "https://media.istockphoto.com/id/173921770/photo/a-closeup-of-eggs-bacon-ham-and-sausage-on-top-of-toast.webp?a=1&b=1&s=612x612&w=0&k=20&c=DfnR6E9_hvGVlx9w4LeR0DMq9rJdSpDxFoxial_v98A="
  },
  {
    name: "Ham & Cheese Croissant",
    category: "food",
    subcategory: "all day breakfast",
    desc: "Warm, flaky croissant filled with ham and melted cheese.",
    price: 4.50,
    img: "https://media.istockphoto.com/id/2179024302/photo/ham-scrambled-eggs-cheese-croissant-for-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=DyRdgwUca9_6fOuKCsgRlx6NUGpSoewr_nchMtDpWCQ="
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
