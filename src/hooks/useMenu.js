import { useQuery } from "@tanstack/react-query";
import { getMenuItems } from "../services/menuService";

export const useMenu = () => {
    const query = useQuery({
        queryKey: ["menu"],
        queryFn: getMenuItems,
        staleTime: 1000 * 60 * 5,
    });

    const menuItems = query.data ?? [];

    return {
        ...query,

        pizza: menuItems.filter(
            item => item.category === "pizza"
        ),

        veganPizza: menuItems.filter(
            item => item.category === "veganPizza"
        ),

        pasta: menuItems.filter(
            item => item.category === "pasta"
        ),

        veganPasta: menuItems.filter(
            item => item.category === "veganPasta"
        ),

        cocktails: menuItems.filter(
            item => item.category === "cocktail"
        ),

        mocktails: menuItems.filter(
            item => item.category === "mocktail"
        ),

        featuredCocktails: menuItems.filter(
            item =>
                item.category === "cocktail" &&
                item.featured
        ),

        specialItem: menuItems.find(
            item => item.category === "special"
        ),
    };
};