import MenuPair from "./MenuPair";
import { useMenu } from "../../hooks/useMenu";


const CocktailsSection = () => {

    const {
        pizza,
        veganPizza,
        pasta,
        veganPasta,
        cocktails,
        mocktails,
        isLoading,
        error
    } = useMenu();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Failed to load menu.</div>;
    }

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
                leftItems={cocktails}
                rightTitle="Mocktails"
                rightItems={mocktails}
            />

        </section>
    );
};

export default CocktailsSection;