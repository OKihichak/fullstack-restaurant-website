import styles from "./MenuSpecial.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { getSpecialItem } from "../../services/menuService";


const MenuSpecial = () => {

    const [specialItem, setSpecialItem] = useState(null);



    const isMobile = useMediaQuery({
        maxWidth: 767
    });

    useEffect(() => {
        const loadSpecial = async () => {
            try {
                const data = await getSpecialItem();
                setSpecialItem(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadSpecial();
    }, []);



    useGSAP(() => {

        const start = isMobile
            ? "top 20%"
            : "top top";

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: "#special-meal",
                start,
                end: "bottom center",
                scrub: 1.5,
                pin: true
            }

        });

        tl

            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: "power1.inOut"
            })

            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1,
                ease: "power1.inOut"
            })

            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            });

    }, []);

    



    return (

        <section
            id="special-meal"
            className={styles.section}
        >

            <div className={styles.container}>

                <h2 className="will-fade">
                    CHEF'S SPECIAL
                </h2>

                <div className={styles.imageWrapper}>

                    <img
                        src={specialItem?.image_url}
                        alt={specialItem?.name}
                        className={`masked-img ${styles.mealImage}`}
                    />

                </div>

                <div className={styles.maskedContainer}>

                    <div id="masked-content">

                        <h3>
                            {specialItem?.name}
                        </h3>

                        <p>
                            {specialItem?.ingredients}
                        </p>

                        <span>{specialItem?.price}€</span>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default MenuSpecial;