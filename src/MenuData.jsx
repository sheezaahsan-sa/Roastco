export const coffees = [
  {
    id: 1,
    name: "House Blend",
    desc: "Our signature blend with notes of chocolate, caramel, and toasted nuts",
    price: 18,
    img: "/images/img1.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Single Origin - Ethiopia",
    desc: "Light roast with bright citrus and floral notes",
    price: 22,
    img: "/images/img11.jpg",
  },
  {
    id: 3,
    name: "Decaf Blend",
    desc: "All the flavor, none of the buzz",
    price: 19,
    img: "/images/img8.jpg",
  },
];

export const steps = [
  {
    id: 1,
    step: "Step 1",
    title: "Sourcing",
    desc: "We partner directly with farmers across the coffee belt, ensuring fair prices and sustainable practices.",
    icon: "🌍",
  },
  {
    id: 2,
    step: "Step 2",
    title: "Roasting",
    desc: "Small-batch roasting in our Portland facility, where we develop each bean to its full potential.",
    icon: "🔥",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Cupping",
    desc: "Rigorous quality control through daily cupping sessions to ensure consistency and excellence.",
    icon: "🧪",
  },
  {
    id: 4,
    step: "Step 4",
    title: "Serving",
    desc: "From our hands to yours, every cup is crafted with care by our trained baristas.",
    icon: "❤️",
  },
];

export const menuSections = [
  {
    category: "Espresso Drinks",
    subtitle: "Crafted with our signature house blend",
    items: [
      {
        name: "Espresso",
        price: "$3.50",
        description: "Rich, bold, and perfectly extracted",
        image: "/images/img7.jpg",
      },
      {
        name: "Cortado",
        price: "$4.50",
        description: "Equal parts espresso and steamed milk",
        image: "/images/img10.jpg",
      },
      {
        name: "Cappuccino",
        price: "$5.00",
        description: "Velvety foam with a double shot",
        popular: true,
        image: "/images/img4.jpg",
      },
    ],
  },
  {
    category: "Pour Overs",
    subtitle: "Single-origin beans, brewed to order",
    items: [
      {
        name: "Ethiopian Yirgacheffe",
        price: "$6.00",
        description: "Floral, citrus, and tea-like",
        tags: ["Bergamot", "Jasmine", "Lemon"],
        image: "/images/img8.jpg",
      },
      {
        name: "Colombian Huila",
        price: "$5.50",
        description: "Caramel, red apple, and milk chocolate",
        popular: true,
        tags: ["Caramel", "Apple", "Chocolate"],
        image: "/images/img5.jpg",
      },
      {
        name: "Guatemalan Antigua",
        price: "$5.50",
        description: "Smoky, cocoa, and spice",
        tags: ["Cocoa", "Smoke", "Spice"],
        image: "/images/img3.jpg",
      },
    ],
  },
  {
    category: "Cold Drinks",
    subtitle: "Refreshing and smooth",
    items: [
      {
        name: "Cold Brew",
        price: "$5.00",
        description: "18-hour steeped perfection",
        popular: true,
        image: "/images/img9.jpg",
      },
      {
        name: "Iced Latte",
        price: "$5.50",
        description: "Espresso over ice with cold milk",
        image: "/images/img12.jpg",
      },
      {
        name: "Nitro Cold Brew",
        price: "$6.00",
        description: "Creamy, cascading, on tap",
        image: "/images/img9.jpg",
      },
    ],
  },
];