import styles from "./MenuSection.module.css";
import MenuCategory from "./MenuCategory";
import { menuItems } from "../../../constants";

const MenuSection = () => {

    return (

        <section
            id="menu-list"
            className={styles.section}
        >

            <div className={styles.list}>

                <MenuCategory
                    title="Pizza"
                    items={menuItems.pizza}
                />

                <MenuCategory
                    title="Pasta"
                    items={menuItems.pasta}
                />

                <MenuCategory
                    title="Cocktails"
                    items={menuItems.cocktails}
                />

            </div>

        </section>

    )

}

export default MenuSection;