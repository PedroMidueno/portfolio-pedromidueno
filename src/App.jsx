import { lazy, Suspense } from 'react'
import { handleBodyThemeChange } from './utils/handleBodyTheme'
import { useUISettings } from './hooks/useUISettings'
import Loader from './components/Loader'
import { Redirect, useLocation } from 'wouter'
import { routes } from './config/consts'
import { handleScroll } from './utils/handleScroll'
const NavBar = lazy(() => import('./components/NavBar'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const AnimatedRoute = lazy(() => import('./components/AnimatedRoute'))
const ScrollTopButton = lazy(() => import('./components/ScrollTopButton'))

export default function App () {
  const { theme } = useUISettings()
  handleBodyThemeChange(theme)
  handleScroll()

  const [location] = useLocation()

  return (
    <Suspense fallback={<Loader />}>
      <NavBar />

      <AnimatedRoute path='/'>
        <Home />
      </AnimatedRoute>

      <AnimatedRoute path='/about'>
        <About />
      </AnimatedRoute>

      <AnimatedRoute path='/contact'>
        <Contact />
      </AnimatedRoute>

      {!routes.includes(location) && <Redirect to='/' />}

      <ScrollTopButton />

    </Suspense>
  )
}
