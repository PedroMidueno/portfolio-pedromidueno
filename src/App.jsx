import { handleBodyThemeChange } from "./utils/handleBodyTheme";
import { useUISettings } from "./hooks/useUISettings";
import { NavBar } from "./components/NavBar";
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { AnimatedRoute } from "./components/AnimatedRoute";

export default function App() {

    const { lang, theme } = useUISettings()
    handleBodyThemeChange(theme)

    return (
        <>
            <NavBar />
            <h1>Mi portfolio Web</h1>
            <h3>Idioma: {lang}</h3>
            <h3>Tema: {theme}</h3>
            <br />

            <AnimatedRoute path='/'>
                <Home />
            </AnimatedRoute>

            <AnimatedRoute path='/about'>
                <About />
            </AnimatedRoute>

            <AnimatedRoute path='/contact'>
                <Contact />
            </AnimatedRoute>


        </>
    )
}