import styles from "./MenuHero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const MenuHero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({
        maxWidth: 767
    });

    useGSAP(() => {

        const heroSplit = new SplitText(
            `.${styles.title}`,
            { type: "chars,words" }
        );

        const subtitleSplit = new SplitText(
            `.${styles.subtitle}`,
            { type: "lines" }
        );

        heroSplit.chars.forEach(char =>
            char.classList.add("text-gradient")
        );

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06
        });

        gsap.from(subtitleSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1
        });

        const startValue = isMobile
            ? "top 50%"
            : "center 60%";

        const endValue = isMobile
            ? "120% top"
            : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.videoWrapper}`,
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        });

        videoRef.current.onloadedmetadata = () => {

            tl.to(videoRef.current, {
                currentTime:
                    videoRef.current.duration
            });

        };

    }, []);

    return (
        <>

            <section className={styles.hero}>

                <h1 className={styles.title}>
                    MENU
                </h1>

                <div className={styles.body}>

                    <div className={styles.content}>

                        <div className="space-y-5 hidden md:block">

                            <p>
                                Crispy. Fresh. Italian.
                            </p>

                            <p className={styles.subtitle}>
                                Taste the soul
                                <br />
                                of Naples
                            </p>

                        </div>

                        <div className={styles.viewMenu}>

                            <p>
                                Stone-baked pizzas crafted
                                with authentic ingredients,
                                rich flavour and timeless
                                Italian tradition.
                            </p>

                            <NavLink to={'/about'}>
                                More About Us
                            </NavLink>

                        </div>

                    </div>

                </div>

            </section>

            <div className={styles.videoWrapper}>

                <video
                    ref={videoRef}
                    src="/videos/menuPage/cocktail.mp4"
                    muted
                    playsInline
                    preload="auto"
                />

            </div>

        </>
    );
};

export default MenuHero;