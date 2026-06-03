import styles from "./MenuSpecial.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";



const MenuSpecial = () => {

    const isMobile = useMediaQuery({
        maxWidth: 767
    });

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
                        src="/images/special-meal.jpg"
                        alt="Special meal"
                        className={`masked-img ${styles.mealImage}`}
                    />

                </div>

                <div className={styles.maskedContainer}>

                    <div id="masked-content">

                        <h3>
                            Truffle Burrata Pizza
                        </h3>

                        <p>
                            Fresh burrata, black truffle cream,
                            parmesan and basil oil.
                        </p>

                        <span>24€</span>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default MenuSpecial;