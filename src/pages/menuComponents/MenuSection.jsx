import MenuPair from "./MenuPair";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
                x: 100,
                y: 100
            })
    }, [])

    return (

        <section id="menu">

            <MenuPair
                leftTitle="Meat Pizzas"
                leftItems={pizza}
                rightTitle="Vegan Pizzas"
                rightItems={veganPizza}
            />

        </section>

    );

};

export default CocktailsSection;