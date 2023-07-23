import CustomLink from "./CustomLink"
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT } from '../config/consts'
import { navBar } from '../config/languages'
import styles from '../styles/NavBar.module.css'
import ThemeSwitch from "./ThemeSwitch"
import LanguageSwitch from "./LanguageSwitch"

const NavBar = () => {
    const { theme, lang } = useUISettings()

    return (
        <header>
            <nav className={`${theme === LIGHT && styles.light}`}>
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
            </nav>
        </header>
    )
}

export default NavBar