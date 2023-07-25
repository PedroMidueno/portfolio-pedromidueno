import CustomLink from "./CustomLink"
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT, DARK } from '../config/consts'
import { navBar } from '../config/languages'
import styles from '../styles/NavBar.module.css'
import ThemeSwitch from "./ThemeSwitch"
import LanguageSwitch from "./LanguageSwitch"
import logo_dark from '../assets/images/logo_dark.png'
import logo_light from '../assets/images/logo_light.png'

const NavBar = () => {
    const { theme, lang } = useUISettings()

    return (
        <header>
            <nav className={`${theme === LIGHT && styles.light}`}>
                <div className={styles.logo}>
                    {theme === LIGHT && <img src={logo_light} alt="PedroMidueno.dev logo" />}
                    {theme === DARK && <img src={logo_dark} alt="PedroMidueno.dev logo" />}
                    
                </div>
                <div className={styles.links}>
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

                    <ThemeSwitch />
                    <LanguageSwitch />
                </div>
            </nav>
        </header>
    )
}

export default NavBar