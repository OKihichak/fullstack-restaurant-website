import { menuItems } from "../../../constants";
import MenuPair from "./MenuPair";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const CocktailsSection = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
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

        <section id="cocktails">

            <MenuPair
                leftTitle="Signature Cocktails"
                leftItems={menuItems.cocktails}
                rightTitle="Refreshing Mocktails"
                rightItems={menuItems.mocktails}
            />


        </section>

    );

};

export default CocktailsSection;