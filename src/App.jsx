import { useSelector } from "react-redux"
import { ThemeSwitch } from "./components/ThemeSwitch";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { handleBodyThemeChange } from "./utils/handleBodyTheme";

export default function App() {

    const { lang, theme } = useSelector(state => {
        return state.settings
    })

    handleBodyThemeChange(theme)

    return (
        <>
            <h1>Mi portfolio Web</h1>
            <h3>Idioma: {lang}</h3>
            <h3>Tema: {theme}</h3>
            <br />

            <ThemeSwitch />
            <br />
            <LanguageSwitch />
        </>
    )
}