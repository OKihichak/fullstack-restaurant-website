import L from "leaflet";

const navLinks = [

    {
        id:1,
        title:"Menu",
        path:"/menu"
    },

    {
        id:2,
        title:"Reservation",
        path:"/#reservation"
    },

    {
        id:3,
        title:"About Us",
        path:"/#about"
    },

    {
        id:4,
        title:"Contact",
        path:"/#contact"
    }

];

const menuItems = {
  pizza: [
    {
      id: 1,
      name: "Margherita",
      price: "12€",
      description: "San Marzano tomatoes, mozzarella di bufala, fresh basil.",
    },

    {
      id: 2,
      name: "Diavola",
      price: "15€",
      description: "Spicy salami, mozzarella, tomato sauce, chili oil.",
    },

    {
      id: 3,
      name: "Quattro Formaggi",
      price: "16€",
      description: "Mozzarella, gorgonzola, parmesan, pecorino.",
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
};

const restaurantIcon = new L.Icon({
  iconUrl: "/images/logo.png",

  iconSize: [55, 70],

  iconAnchor: [27, 70],

  popupAnchor: [0, -70],
});

export { navLinks, restaurantIcon, menuItems };
