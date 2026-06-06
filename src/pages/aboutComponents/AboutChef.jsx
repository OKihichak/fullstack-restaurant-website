import styles from "./AboutChef.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const AboutChef = () => {

    useGSAP(() => {

        const titleSplit = new SplitText(".chef-title", {
            type: "chars, words"
        });

        titleSplit.chars.forEach((char) =>
            char.classList.add("text-gradient")
        );

        gsap.from(".chef-image", {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".chef-image",
                start: "top 80%",
            }
        });

        gsap.from(".chef-label", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".chef-content",
                start: "top 80%",
            }
        });

        gsap.from(titleSplit.chars, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.04,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".chef-content",
                start: "top 80%",
            }
        });

        gsap.from(".chef-text", {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".chef-content",
                start: "top 75%",
            }
        });

    }, []);

    return (
        <section className={styles.chef}>

            <div className={styles.container}>

                <div className={`${styles.imageWrapper} chef-image`}>
                    <img
                        src="/images/aboutChef.jpg"
                        alt="Chef Marco Rossi"
                    />
                </div>

                <div className={`${styles.content} chef-content`}>

                    <span className="chef-label">
                        MEET THE CHEF
                    </span>

                    <h2 className="chef-title">
                        Chef Marco Rossi
                    </h2>

                    <p className="chef-text">
                        Chef Marco Rossi combines classic Italian
                        techniques with modern creativity, crafting
                        dishes that honour tradition while delivering
                        unforgettable dining experiences.
                    </p>

                    <p className="chef-text">
                        With over 15 years of experience in Italian
                        kitchens, his philosophy is simple:
                        exceptional ingredients, authentic recipes
                        and attention to every detail.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default AboutChef;