import styles from "./AboutHero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const AboutHero = () => {

    useGSAP(() => {

        const heroSplit = new SplitText('.title', { type: 'chars, words' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        const titleSplit = new SplitText(".about-title", {
            type: "chars, words"
        });

        gsap.from(".hero-image", {
            scale: 1.15,
            duration: 2,
            ease: "power2.out"
        });

        gsap.from(".about-label", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2,
            ease: "power2.out"
        });

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.03,
            duration: 1.5,
            ease: "expo.out",
            delay: 0.4
        });

        gsap.from(".about-description", {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 1,
            ease: "power2.out"
        });

    }, []);

    return (
        <section className={styles.hero}>

            <img
                src="/images/aboutHero.jpg"
                alt="Restaurant crew"
                className={`hero-image ${styles.heroImage}`}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>

                

                <h1 className="title">
                    ABOUT US
                </h1>

                <p className="about-description">
                    From our chefs and bartenders to our service team,
                    every member of PIER is dedicated to creating
                    memorable dining experiences built on passion,
                    craftsmanship and genuine hospitality.
                </p>

            </div>

        </section>
    );
};

export default AboutHero;