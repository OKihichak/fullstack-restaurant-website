import { menuItems } from "../../../constants";
import MenuPair from "./MenuPair";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const CocktailsSection = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline.from('#c-left-leaf', {
            x: -100,
            y: 100
        })
        .from('#c-right-leaf', {
            x:100,
            y: 100
        })
    },[])

    return (

        <section id="menu" >

            <MenuPair
                leftTitle="Signature Cocktails"
                leftItems={menuItems.cocktails}
                rightTitle="Refreshing Mocktails"
                rightItems={menuItems.mocktails}
            />

            <MenuPair
                leftTitle="Meat Pizzas"
                leftItems={menuItems.pizza}
                rightTitle="Vegan Pizzas"
                rightItems={menuItems.veganPizza}
            />

            <MenuPair
                leftTitle="Meat Pasta"
                leftItems={menuItems.pasta}
                rightTitle="Vegan Pasta"
                rightItems={menuItems.veganPasta}
                id="last-menu-pair"
            />


        </section>

    );

};

export default CocktailsSection;