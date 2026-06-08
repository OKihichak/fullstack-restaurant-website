import MenuPair from "./MenuPair";
import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuService";

const CocktailsSection = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getMenuItems();
                setMenuItems(data);
            }
            catch (error) {
                console.error(error);
            }
        };

        fetchMenu();
    }, []);

    const pizza = menuItems.filter(
        item => item.category === "pizza"
    );

    const veganPizza = menuItems.filter(
        item => item.category === "veganPizza"
    );

    const pasta = menuItems.filter(
        item => item.category === "pasta"
    );

    const veganPasta = menuItems.filter(
        item => item.category === "veganPasta"
    );

    const cocktail = menuItems.filter(
        item => item.category === "cocktail"
    );

    const mocktail = menuItems.filter(
        item => item.category === "mocktail"
    );

    

    return (

        <section id="menu">

            <MenuPair
                leftTitle="Meat Pizzas"
                leftItems={pizza}
                rightTitle="Vegan Pizzas"
                rightItems={veganPizza}
            />

            <MenuPair
                leftTitle="Meat Pasta"
                leftItems={pasta}
                rightTitle="Vegan Pasta"
                rightItems={veganPasta}
            />

            <MenuPair
                leftTitle="Cocktails"
                leftItems={cocktail}
                rightTitle="Mocktails"
                rightItems={mocktail}
            />

        </section>

    );

};

export default CocktailsSection;