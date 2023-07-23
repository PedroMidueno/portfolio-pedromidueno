import { lazy, Suspense } from 'react'
import { handleBodyThemeChange } from "./utils/handleBodyTheme";
import { useUISettings } from "./hooks/useUISettings";
const NavBar = lazy(() => import('./components/NavBar'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const AnimatedRoute = lazy(() => import('./components/AnimatedRoute'))

export default function App() {

    const { lang, theme } = useUISettings()
    handleBodyThemeChange(theme)

    return (
        <Suspense fallback={<div>Loading...</div>}>
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


        </Suspense >
    )
}