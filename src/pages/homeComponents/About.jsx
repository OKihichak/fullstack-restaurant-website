import styles from "./About.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);




const About = () => {

    const sectionRef = useRef();
    const knifeRef = useRef();


    useGSAP(() => {

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }

        });

        tl.from(".about-left", {
            opacity: 0,
            x: -80,
            duration: 1.4,
            ease: "expo.out"
        })

            .from(".about-right", {
                opacity: 0,
                x: 80,
                duration: 1.4,
                ease: "expo.out"
            }, "-=1")

            .from(knifeRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 1.8,
                ease: "expo.out"
            }, "-=1");



        gsap.to(knifeRef.current, {

            

            ease: "none",

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }

        });

    });


    return (

        <section ref={sectionRef} className={styles.section}>

            <div className={styles.content}>

                <div className={`about-left ${styles.left}`}>

                    <h2>About Us</h2>

                    <p>
                        Authentic Italian cuisine,
                        handcrafted recipes and
                        a modern dining experience.
                    </p>

                    <button>
                        Know More
                    </button>

                </div>

                <div className={styles.center}>

                    <div className={styles.letter}>
                        P
                    </div>

                    <img
                        ref={knifeRef}
                        src="/images/knife.png"
                        alt="chef knife"
                    />

                </div>

                <div className={`about-right ${styles.right}`}>

                    <h2>Reach Out</h2>

                    <p>
                        We'd love to hear from you.
                        Whether it's a reservation,
                        celebration, or simple inquiry —
                        we're here to help.
                    </p>

                    <button>
                        Know More
                    </button>

                </div>

            </div>

        </section>

    )
}

export default About