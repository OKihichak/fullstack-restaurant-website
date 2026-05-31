import { navLinks } from "../../constants"
import styles from "./MainNavigation.module.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { NavLink } from "react-router-dom";



const MainNavigation = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (

        <nav className={styles.nav}>

            <div>

                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                >

                    <img
                        src="/images/logo.png"
                        alt="logo"
                    />

                    <p>Pier</p>

                </NavLink>

                <ul>

                    {navLinks.map((link) => (

                        <li key={link.id}>

                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>

                                    isActive
                                        ? styles.active
                                        : ""

                                }
                            >

                                {link.title}

                            </NavLink>

                        </li>

                    ))}

                </ul>

            </div>

        </nav>

    )
}

export default MainNavigation