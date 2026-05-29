import styles from "./Gallery.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);


const Gallery = () => {


    useGSAP(() => {

        const titleSplit = SplitText.create(
            '#gallery h2',
            {
                type: 'words'
            }
        );

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: '#gallery',
                start: 'top 70%',
            }

        });

        tl

            .from('.gallery-badge', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'expo.out'
            })

            .from(titleSplit.words, {
                opacity: 0,
                yPercent: 100,
                duration: 0.5,
                ease: 'expo.out',
                stagger: 0.025
            })

            .from('.gallery-right > *', {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.15,
                ease: 'expo.out'
            })

            .from('.top-grid > div, .bottom-grid > div', {

                opacity: 0,
                y: 60,
                scale: 0.95,
                duration: 0.7,
                ease: 'power1.inOut',
                stagger: 0.07

            },)

    }, [])





    return (
        <section id="gallery" className={styles.gallery}>

            <div className={styles.header}>

                <div className={styles.left}>

                    <p className={`gallery-badge ${styles.badge}`}>
                        Signature Experience
                    </p>

                    <h2>
                        Where every plate tells a story
                        <span> — </span>
                        from kitchen to table
                    </h2>

                </div>

                <div className={`gallery-right ${styles.right}`}>

                    <p>
                        Every dish we serve reflects our
                        passion for authentic Italian cuisine,
                        crafted ingredients and memorable evenings.
                    </p>

                    <div>

                        <p className={styles.rating}>
                            <span>4.8</span>/5
                        </p>

                        <p className={styles.ratingText}>
                            Trusted by 10,000+ guests
                        </p>

                    </div>

                </div>

            </div>

            <div className={`top-grid ${styles.topGrid}`}>

                <div>
                    <img src="/images/gallery1.jpg" alt="" />
                </div>

                <div>
                    <img src="/images/gallery2.jpg" alt="" />
                </div>

                <div>
                    <img src="/images/gallery3.jpg" alt="" />
                </div>

            </div>

            <div className={`bottom-grid ${styles.bottomGrid}`}>

                <div>
                    <img src="/images/gallery4.jpg" alt="" />
                </div>

                <div>
                    <img src="/images/gallery5.jpg" alt="" />
                </div>

            </div>

        </section>
    );
};

export default Gallery;