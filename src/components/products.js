const products = [
  {
    id: 1,
    text: "Expense",
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "Beauty",
    
  },

  {
    id: 2,
    text: "Glamour Beauty",
    name: "Eyeshadow Palette with Mirror",
    price: 19.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: " beauty",
  },
  {
    id: 3,
    text: "Velvet Touch",
    name: "Powder Canister",
    price: 14.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
  },
  {
    id: 4,
    text: "Chic Cosmetics",
    name: "Red Lipstick",
    price: 12.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
  },
  {
    id: 5,
    text: "Nail Couture",
    name: "Red Nail Polish",
    price: 8.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
  },
  {
    id: 6,
    text: "Calvin Klein",
    name: "Calvin Klein CK One",
    price: 49.99,
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
  },
  {
    id: 7,
    text: "Chanel",
    name: "Chanel Coco Noir Eau De",
    price: 129.99,
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
  },
  {
    id: 8,
    text: "Dior",
    name: "Dior J'adore",
    price: 89.99,
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
  },
  {
    id: 9,
    text: "Dolce & Gabbana",
    name: "Dolce Shine Eau de",
    price: 69.99,
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
  },
  {
    id: 10,
    text: "Gucci",
    name: "Gucci Bloom Eau de",
    price: 79.99,
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
  },
  {
    id: 11,
    text: "Annibale Colombo",
    name: "Annibale Colombo Bed",
    price: 1899.99,
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
  },
  {
    id: 12,
    text: "Annibale Colombo",
    name: "Annibale Colombo Sofa",
    price: 2499.99,
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
  },
  {
    id: 13,
    text: "Furniture Co.",
    name: "Bedside Table African Cherry",
    price: 299.99,
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
  },
  {
    id: 14,
    text: "Knoll",
    name: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
  },
  {
    id: 15,
    text: "Bath Trends",
    name: "Wooden Bathroom Sink With Mirror",
    price: 799.99,
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
  },
  {
    id: 16,
    name: "Apple",
    price: 1.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
  },
  {
    id: 17,
    name: " Beef Steak",
    price: 12.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "groceries",
  },
  {
    id: 18,
    name: "Cat Food",
    price: 8.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    category: "groceries",
  },
  {
    id: 19,
    name: "Chicken Meat",
    price: 9.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "groceries",
  },
  {
    id: 20,
    name: "Cooking Oil",
    price: 4.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "groceries",
  },
  {
    id: 21,
    name: " Cucumber",
    price: 1.49,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    description:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    category: "groceries",
  },
  {
    id: 22,
    name: "Dog Food",
    price: 10.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    description:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    category: "groceries",
  },
  {
    id: 23,
    name: "Eggs",
    price: 2.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    description:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    category: "groceries",
  },
  {
    id: 24,
    name: "Fish Steak",
    price: 14.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    description:
      "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    category: "groceries",
  },
  {
    id: 25,
    name: "Green Bell Pepper",
    price: 1.29,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    description:
      "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    category: "groceries",
  },
  {
    id: 26,
    name: "Green Chili Pepper",
    price: 0.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    description:
      "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    category: "groceries",
  },
  {
    id: 27,
    name: "Honey Jar",
    price: 6.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    description:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    category: "groceries",
  },
  {
    id: 28,
    name: "Ice Cream",
    price: 5.49,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
  },
  {
    id: 29,
    name: "Juice",
    price: 3.99,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    description:
      "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    category: "groceries",
  },
  {
    id: 30,
    name: "Kiwi",
    price: 2.49,
    image:
      "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    description:
      "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    category: "groceries",
  },
];

export default products;
