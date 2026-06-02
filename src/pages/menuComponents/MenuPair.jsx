import styles from "./MenuPair.module.css";

const MenuPair = ({
    leftTitle,
    leftItems,
    rightTitle,
    rightItems,
}) => {

    return (

        <div className={styles.list}>

            <div className={styles.popular}>

                <h2>{leftTitle}</h2>

                <ul>

                    {leftItems.map((item) => (

                        <li key={item.id}>

                            <div className={styles.info}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>

                            <span>{item.price}</span>

                        </li>

                    ))}

                </ul>

            </div>

            <div className={styles.loved}>

                <h2>{rightTitle}</h2>

                <ul>

                    {rightItems.map((item) => (

                        <li key={item.id}>

                            <div className={styles.info}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>

                            <span>{item.price}</span>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

};

export default MenuPair;