import MenuCocktails from "./menuComponents/MenuCocktails"
import MenuHero from "./menuComponents/MenuHero"
import MenuSection from "./menuComponents/MenuSection"
import MenuSpecial from "./menuComponents/MenuSpecial"




const MenuPage = () => {
    return (
        <>
            <MenuHero />
            <MenuSection />
            <MenuSpecial />
            <MenuCocktails />
        </>

    )
}

export default MenuPage