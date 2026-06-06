import { restaurantHistory } from "../../../constants";
import styles from "./AboutHistory.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AboutHistory = () => {
    const featured = restaurantHistory.slice(0, 3);
    const timeline = restaurantHistory.slice(3);

    useGSAP(() => {

        gsap.from(".history-title", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(".featured-card", {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#history",
                start: "top 70%",
            },
        });

        gsap.utils.toArray(".timeline-item").forEach((item) => {

            gsap.from(item, {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

        });

        gsap.fromTo(
        `.${styles.line}`,
        {
            height: 0,
        },
        {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: `.${styles.timeline}`,
                start: "top 80%",
                end: "bottom 80%",
                scrub: true,
            },
        }
    );

    }, []);

    return (
        <section id="history" className={styles.history}>

            <h2 className="history-title">Our Story</h2>

            <div className={styles.grid}>

                <div className={styles.featured}>

                    <article className={`${styles.mainCard} featured-card`}>
                        <img
                            src={featured[0].image}
                            alt={featured[0].title}
                        />

                        <div className={styles.overlay}>
                            <span>OUR BEGINNING</span>
                            <h3>{featured[0].title}</h3>
                        </div>
                    </article>

                    <div className={styles.smallCards}>
                        {featured.slice(1).map((item) => (
                            <article
                                key={item.year}
                                className={`${styles.smallCard} featured-card`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div className={styles.overlay}>
                                    <span>{item.year}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

                <div className={styles.timeline}>

                    <div className={styles.line} />

                    {timeline.map((item) => (
                        <div
                            key={item.year}
                            className={`${styles.timelineItem} timeline-item`}
                        >

                            <div className={styles.dot} />

                            <div className={styles.content}>
                                <span>{item.year}</span>

                                <h3>{item.title}</h3>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default AboutHistory;