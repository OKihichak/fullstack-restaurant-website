import styles from "./Location.module.css";
import "leaflet/dist/leaflet.css";
import MainLocation from "../../components/MainLocation";

const Location = () => {

    

    return (

        <section
            id="location"
            className={styles.location}
        >

            <div className={styles.header}>


                <h2>
                    Find us in the heart
                    of the city
                </h2>

            </div>

            <div className={styles.mapWrapper}>

                <MainLocation />

            </div>

        </section>

    )
}

export default Location;