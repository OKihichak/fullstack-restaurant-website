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

                <h1 className="title">
                    Pier
                </h1>

                <div className={styles.body}>

                    <div className={styles.content}>

                        <div className="space-y-5 hidden md:block">
                            <p>Pasta.Pizza.Wine</p>

                            <p className="subtitle">
                                Try the spirit
                                <br />
                                of Italy
                            </p>
                        </div>

                        <div className={styles.viewMenu}>

                            <p className="subtitle">
                                Every cocktail in our menu is a blend
                                of ages, history and significant work.
                            </p>

                            <a href="#menu">
                                View Menu
                            </a>

                        </div>

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
                        alt="video control"
                    />

                </button>

            </section>

        </>
    )
}

export default Hero