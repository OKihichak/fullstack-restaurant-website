import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <section className={styles.contact}>

            <div className={styles.info}>

                <span>CONTACT</span>

                <h2>Let's Talk</h2>

                <p>
                    Have a question, suggestion or want to reserve a table?
                    We'd love to hear from you.
                </p>

                <div className={styles.details}>

                    <div>
                        <h3>Address</h3>

                        <p>Restaurant Street 12</p>
                        <p>Berlin, Germany</p>
                    </div>

                    <div>
                        <h3>Phone</h3>

                        <p>+49 123 456 789</p>
                    </div>

                    <div>
                        <h3>Email</h3>

                        <p>hello@pier.com</p>
                    </div>

                    <div>
                        <h3>Follow Us</h3>

                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>TikTok</p>
                    </div>

                </div>

            </div>

            <form className={styles.form}>

                <h3>Send a Message</h3>

                <input
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                />

                <input
                    type="text"
                    placeholder="Subject"
                />

                <textarea
                    placeholder="Your Message"
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

        </section>
    );
};

export default ContactForm;