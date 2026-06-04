import L from "leaflet";

const navLinks = [
  {
    id: 1,
    title: "Menu",
    path: "/menu",
  },

  {
    id: 2,
    title: "Reservation",
    path: "/#reservation",
  },

  {
    id: 3,
    title: "About Us",
    path: "/#about",
  },

  {
    id: 4,
    title: "Contact",
    path: "/#contact",
  },
];

const menuItems = {
  pizza: [
    {
      id: 2,
      name: "Diavola",
      price: "15€",
      description: "Spicy salami, mozzarella, tomato sauce, chili oil.",
    },

    {
      id: 4,
      name: "Prosciutto e Funghi",
      price: "17€",
      description: "Italian ham, mushrooms, mozzarella, tomato base.",
    },

    {
      id: 5,
      name: "Tartufo Bianca",
      price: "20€",
      description: "White sauce, truffle cream, mozzarella, parmesan.",
    },

    {
      id: 6,
      name: "Capricciosa",
      price: "18€",
      description: "Artichokes, olives, ham, mushrooms, mozzarella.",
    },

    {
      id: 7,
      name: "Vegetariana",
      price: "16€",
      description: "Grilled vegetables, mozzarella, pesto drizzle.",
    },

    {
      id: 8,
      name: "Burrata Speciale",
      price: "21€",
      description: "Cherry tomatoes, burrata, basil oil, parmesan.",
    },
  ],

  pasta: [
    {
      id: 9,
      name: "Carbonara",
      price: "16€",
      description: "Guanciale, pecorino romano, egg yolk, black pepper.",
    },

    {
      id: 10,
      name: "Cacio e Pepe",
      price: "15€",
      description: "Roman pecorino cheese, black pepper, handmade pasta.",
    },

    {
      id: 11,
      name: "Tagliatelle al Ragù",
      price: "18€",
      description: "Slow cooked beef ragù, parmesan, fresh tagliatelle.",
    },

    {
      id: 12,
      name: "Pesto Genovese",
      price: "15€",
      description: "Basil pesto, pine nuts, parmesan, olive oil.",
    },

    {
      id: 13,
      name: "Truffle Linguine",
      price: "22€",
      description: "Creamy truffle sauce, parmesan, fresh herbs.",
    },

    {
      id: 14,
      name: "Seafood Linguine",
      price: "24€",
      description: "Shrimp, mussels, garlic, white wine sauce.",
    },

    {
      id: 15,
      name: "Lasagna della Casa",
      price: "19€",
      description: "House-made lasagna with ragù and béchamel.",
    },

    {
      id: 16,
      name: "Arrabbiata",
      price: "14€",
      description: "Spicy tomato sauce, garlic, parsley, chili flakes.",
    },
  ],

  veganPasta: [
    {
      id: 27,
      name: "Penne Arrabbiata",
      price: "14€",
      description: "Spicy tomato sauce, garlic and parsley.",
    },
    {
      id: 28,
      name: "Spaghetti al Pomodoro",
      price: "13€",
      description: "San Marzano tomato sauce and fresh basil.",
    },
    {
      id: 29,
      name: "Pesto Vegan",
      price: "15€",
      description: "Basil pesto, pine nuts and olive oil.",
    },
    {
      id: 30,
      name: "Funghi e Spinaci",
      price: "16€",
      description: "Mushrooms, spinach and garlic olive oil.",
    },
    {
      id: 31,
      name: "Mediterranean Linguine",
      price: "17€",
      description: "Olives, capers, cherry tomatoes and herbs.",
    },
    {
      id: 32,
      name: "Truffle Penne",
      price: "18€",
      description: "Truffle oil, mushrooms and vegan cream.",
    },
  ],

  veganPizza: [
    {
      id: 17,
      name: "Verdura Verde",
      price: "15€",
      description: "Zucchini, grilled eggplant, cherry tomatoes and basil.",
    },
    {
      id: 18,
      name: "Vegan Margherita",
      price: "14€",
      description: "Tomato sauce, vegan mozzarella and fresh basil.",
    },
    {
      id: 19,
      name: "Funghi Tartufati",
      price: "17€",
      description: "Mixed mushrooms, truffle oil and vegan cream.",
    },
    {
      id: 20,
      name: "Mediterranea",
      price: "16€",
      description: "Olives, artichokes, roasted peppers and oregano.",
    },
    {
      id: 21,
      name: "Pesto Verde",
      price: "17€",
      description: "Vegan pesto, pine nuts, spinach and vegan cheese.",
    },
    {
      id: 22,
      name: "Ortolana",
      price: "16€",
      description: "Seasonal vegetables, tomato sauce and fresh herbs.",
    },
  ],

  cocktails: [
    {
      id: 17,
      name: "Negroni",
      price: "13€",
      description: "Gin, Campari, sweet vermouth.",
      
    },

    {
      id: 18,
      name: "Aperol Spritz",
      price: "11€",
      description: "Aperol, prosecco, soda water, orange.",
      
    },

    {
      id: 19,
      name: "Espresso Martini",
      price: "14€",
      description: "Vodka, coffee liqueur, fresh espresso.",
      
    },

    {
      id: 20,
      name: "Old Fashioned",
      price: "15€",
      description: "Bourbon, bitters, sugar, orange zest.",
      
    },

    {
      id: 21,
      name: "Amalfi Sunset",
      price: "16€",
      description: "Gin, limoncello, grapefruit, rosemary.",
      
    },

    {
      id: 22,
      name: "Pier Signature",
      price: "17€",
      description: "Vodka, passionfruit, basil syrup, citrus.",
      
    },

    {
      id: 23,
      name: "Bellini",
      price: "12€",
      description: "Prosecco, white peach purée.",
      
    },

    {
      id: 24,
      name: "Smoked Manhattan",
      price: "18€",
      description: "Rye whiskey, vermouth, bitters, smoked aroma.",
      
    },
  ],
  mocktails: [
    {
      id: 25,
      name: "Virgin Mojito",
      price: "9€",
      description: "Fresh mint, lime juice, soda water, cane sugar.",
      
    },

    {
      id: 26,
      name: "Berry Fizz",
      price: "10€",
      description: "Mixed berries, lemon juice, sparkling water.",
      
    },

    {
      id: 27,
      name: "Tropical Breeze",
      price: "11€",
      description: "Pineapple, mango, passionfruit and citrus blend.",
    },

    {
      id: 28,
      name: "Italian Sunset",
      price: "10€",
      description: "Blood orange, peach nectar, tonic water.",
    },

    {
      id: 29,
      name: "Cucumber Cooler",
      price: "9€",
      description: "Cucumber, lime, mint and sparkling water.",
    },

    {
      id: 30,
      name: "Passion Spritz",
      price: "11€",
      description: "Passionfruit purée, soda water and fresh lime.",
    },

    {
      id: 31,
      name: "Rosso Berry",
      price: "10€",
      description: "Raspberry, cranberry and lemon with ice.",
    },

    {
      id: 32,
      name: "Lemon Basil Refresher",
      price: "9€",
      description: "Fresh basil, lemon juice, honey and soda.",
    },
  ],
};

const cocktailSliderItems = [
  {
    name: "Negroni",
    path: "/images/cocktails/negroni.png",
    title: "The Bold Italian Icon",
    description:
      "A timeless blend of gin, Campari and sweet vermouth. Bitter, complex and perfectly balanced for slow sipping.",
  },

  {
    name: "Aperol Spritz",
    path: "/images/cocktails/aperol-spritz.png",
    title: "Sunshine in Every Sip",
    description:
      "Bright, bubbly and effortlessly refreshing. Italy's favorite aperitivo made for warm evenings and good company.",
  },

  {
    name: "Espresso Martini",
    path: "/images/cocktails/espresso-martini.png",
    title: "Where Coffee Meets Cocktail",
    description:
      "Rich espresso and smooth vodka come together in a sophisticated drink that energizes and indulges at once.",
  },

  {
    name: "Old Fashioned",
    path: "/images/cocktails/old-fashioned.png",
    title: "A Gentleman’s Classic",
    description:
      "Simple yet refined. Bourbon, bitters and sugar create one of the most celebrated cocktails of all time.",
  },

  {
    name: "Amalfi Sunset",
    path: "/images/cocktails/amalfi-sunset.png",
    title: "Inspired by the Italian Coast",
    description:
      "Limoncello, grapefruit and rosemary capture the colors and aromas of a Mediterranean sunset.",
  },

  {
    name: "Pier Signature",
    path: "/images/cocktails/pier-signature.png",
    title: "Crafted for the House",
    description:
      "A vibrant fusion of passionfruit, basil and citrus. Fresh, elegant and uniquely ours.",
  },

  {
    name: "Bellini",
    path: "/images/cocktails/bellini.png",
    title: "Venetian Elegance",
    description:
      "Delicate white peach and sparkling prosecco create a light and celebratory Italian favorite.",
  },

  {
    name: "Smoked Manhattan",
    path: "/images/cocktails/berry-fizz.png",
    title: "Smoke, Spice & Sophistication",
    description:
      "Rye whiskey and vermouth elevated with aromatic smoke for a memorable and dramatic finish.",
  },
];

const restaurantIcon = new L.Icon({
  iconUrl: "/images/logo.png",

  iconSize: [55, 70],

  iconAnchor: [27, 70],

  popupAnchor: [0, -70],
});

export { navLinks, restaurantIcon, menuItems, cocktailSliderItems };
