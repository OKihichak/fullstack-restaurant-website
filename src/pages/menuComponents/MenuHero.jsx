import styles from "./MenuHero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);


const MenuHero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 })



    useGSAP(() => {

        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        })


        const startValue = isMobile ? 'top 50%' : 'center 60%';
        

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                endTrigger: '#menu',
                end: 'bottom bottom',
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

    }, [])

    return (
        <>
            <section className={styles.hero}>

                

                <h1 className={`title ${styles.title}`}>
                    MENU
                </h1>

                <div className={styles.body}>

                    <div className={styles.content}>

                        <div className="space-y-5 hidden md:block">

                            <p>
                                Crispy. Fresh. Italian.
                            </p>

                            <p className={`subtitle ${styles.subtitle}`}>
                                Taste the soul
                                <br />
                                of Naples
                            </p>

                        </div>

                        <div className={`view-cocktails ${styles.viewCocktails}`}>

                            <p className="subtitle">
                                Stone-baked pizzas crafted
                                with authentic ingredients,
                                rich flavour and timeless
                                Italian tradition.
                            </p>

                            <a href="#pizza-menu">
                                Explore Menu
                            </a>

                        </div>

                    </div>

                </div>

            </section>

            <div className={`video ${styles.videoWrapper}`}>

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