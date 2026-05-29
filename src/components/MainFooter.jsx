import styles from "./MainFooter.module.css";

const MainFooter = () => {

    return (

        <footer className={styles.footer}>

            <div className={styles.container}>

                <div className={styles.brand}>

                    <h2>Pier</h2>

                    <p>
                        Authentic Italian cuisine,
                        handcrafted cocktails
                        and unforgettable evenings.
                    </p>

                </div>

                <div className={styles.links}>

                    <h3>Navigation</h3>

                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#location">Location</a>

                </div>

                <div className={styles.contact}>

                    <h3>Contact</h3>

                    <p>+49 123 456 789</p>

                    <p>
                        Alexanderplatz 8
                        <br/>
                        Berlin, Germany
                    </p>

                    <p>
                        hello@pier-restaurant.com
                    </p>

                </div>

                <div className={styles.hours}>

                    <h3>Opening Hours</h3>

                    <p>Mon – Thu: 12:00 – 22:00</p>
                    <p>Fri – Sat: 12:00 – 23:30</p>
                    <p>Sunday: 13:00 – 21:00</p>

                </div>

            </div>

            <div className={styles.bottom}>

                <p>
                    © 2026 Pier Restaurant.
                    All rights reserved.
                </p>

            </div>

        </footer>

    )
}

export default MainFooter;