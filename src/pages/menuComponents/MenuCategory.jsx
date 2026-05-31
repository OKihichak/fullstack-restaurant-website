import styles from "./MenuCategory.module.css";

const MenuCategory = ({ title, items }) => {

    return (

        <div className={styles.category}>

            <h2>
                {title}
            </h2>

            <ul>

                {items.map((item) => (

                    <li key={item.id}>

                        <div className={styles.info}>

                            <h3>
                                {item.name}
                            </h3>

                            <p>
                                {item.description}
                            </p>

                        </div>

                        <span>
                            {item.price}
                        </span>

                    </li>

                ))}

            </ul>

        </div>

    )

}

export default MenuCategory;