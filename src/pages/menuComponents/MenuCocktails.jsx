import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { getFeaturedCocktails } from "../../services/menuService";
// import { cocktailSliderItems } from "../../../constants";
import styles from "./MenuCocktails.module.css";


const MenuCocktails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const loadCocktails = async () => {
            try {
                const data = await getFeaturedCocktails();
                setCocktails(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadCocktails();
    }, []);

    const totalCocktails = cocktails.length;



    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (offset) => {
        return cocktails[
            (currentIndex + offset + totalCocktails) % totalCocktails
        ];
    };

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    useGSAP(() => {

        if (!cocktails.length) return;

        gsap.fromTo(
            ".cocktail img",
            {
                opacity: 0,
                xPercent: -100,
            },
            {
                opacity: 1,
                xPercent: 0,
                duration: 1,
                ease: "power1.inOut",
            }
        );

        gsap.fromTo(
            ".details h2",
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 1,
            }
        );

        gsap.fromTo(
            ".details p",
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 1,
            }
        );

    }, [currentIndex, cocktails]);

    if (!cocktails.length) {
        return <div>Loading...</div>;
    }

    return (
        <section id="menu-cocktails" className={styles.menuCocktails}>
            <div className={styles.content}>

                <div className={styles.arrows}>

                    <button
                        className={styles.arrowLeft}
                        onClick={() => goToSlide(currentIndex - 1)}
                    >
                        <span>{prevCocktail.name}</span>

                        <img
                            src="/images/right-arrow.png"
                            alt="right arrow"
                            aria-hidden="true"
                        />
                    </button>

                    <button
                        className={styles.arrowRight}
                        onClick={() => goToSlide(currentIndex + 1)}
                    >
                        <span>{nextCocktail.name}</span>

                        <img
                            src="/images/left-arrow.png"
                            alt="left arrow"
                            aria-hidden="true"
                        />
                    </button>
                </div>

                <div className={`cocktail ${styles.cocktail}`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={currentCocktail.image_url}
                            alt={currentCocktail.name}
                        />
                    </div>
                </div>

                <div className={styles.recipe}>

                    <div className={styles.info}>
                        <p>Cocktail</p>

                        <p className={styles.title}>
                            {currentCocktail.name}
                        </p>
                    </div>

                    <div className={`details ${styles.details}`}>
                        <h2 >
                            {currentCocktail.title}
                        </h2>

                        <p >
                            {currentCocktail.description}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MenuCocktails;