import { useState } from "react"
import CustomLink from "./CustomLink"
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT, DARK } from '../config/consts'
import { navBar } from '../config/languages'
import styles from '../styles/NavBar.module.css'
import ThemeSwitch from "./ThemeSwitch"
import LanguageSwitch from "./LanguageSwitch"
import logo_dark from '../assets/images/logo_dark.png'
import logo_light from '../assets/images/logo_light.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const { theme, lang } = useUISettings()

    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
        const links = document.querySelector('#links')
        links.classList.toggle(styles.visible)
    }

    const hideMenu = () => {
        document.querySelector('#links').classList.remove(styles.visible)
        setOpen(false)
    }

    return (
        <header>
            <nav className={`${theme === LIGHT && styles.light}`}>
                <div className={styles.logo}>
                    {theme === LIGHT && <img src={logo_light} alt="PedroMidueno.dev logo" />}
                    {theme === DARK && <img src={logo_dark} alt="PedroMidueno.dev logo" />}

                </div>
                <div className={`${styles.links} ${theme === LIGHT && styles.light}`}
                    id="links"
                    onClick={hideMenu}>
                    <CustomLink path='/'>
                        {lang === ES && navBar.home.es}
                        {lang === EN && navBar.home.en}
                    </CustomLink>

                    <CustomLink path='/about'>
                        {lang === ES && navBar.about.es}
                        {lang === EN && navBar.about.en}
                    </CustomLink>

                    <CustomLink path='/contact'>
                        {lang === ES && navBar.contact.es}
                        {lang === EN && navBar.contact.en}
                    </CustomLink>
                </div>

                <div className={styles.switches}>
                    <ThemeSwitch />
                    <LanguageSwitch />

                    <button onClick={showMenu}
                        className={`${styles.menu_button}
                        ${theme === LIGHT && styles.light}`}
                    >
                        {open && <FontAwesomeIcon icon={faXmark} />}
                        {!open && <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>


            </nav>
        </header>
    )
}

export default NavBar