import styles from "./Hero.module.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef, useState } from "react"



const Hero = () => {

    const [isPlaying, setIsPlaying] = useState(true);

    const videoRef = useRef();



    const toggleVideo = () => {

        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

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

        gsap.from('.cta-buttons', {
            opacity: 0,
            y: 40,
            duration: 1.8,
            ease: 'expo.out',
            delay: 1
        });


    }, [])

    return (
        <>
            <section id="hero" className={styles.hero}>

                <video
                    className={styles.video}
                    ref={videoRef}
                    src="/videos/homePage/heroVideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />

                <div className={styles.overlay}></div>

                <div className={styles.content}>

                    <h1 className="title">
                        Pier
                    </h1>

                    <p className={`subtitle ${styles.subtitle}`}>
                        Pizza • Pasta • Love
                    </p>

                    <div className={`cta-buttons ${styles.actions}`}>

                        <a
                            href="#menu"
                            className={styles.primaryBtn}
                        >
                            Check Menu
                        </a>

                        <a
                            href="#reserve"
                            className={styles.secondaryBtn}
                        >
                            Reserve Table
                        </a>

                    </div>

                </div>

                <button
                    className={styles.videoControl}
                    onClick={toggleVideo}
                >
                    <img
                        src={
                            isPlaying
                                ? "/images/pause.svg"
                                : "/images/play.svg"
                        }
                        alt=""
                    />
                </button>

            </section>

        </>
    )
}

export default Hero