import { lazy, Suspense } from 'react'
import { handleBodyThemeChange } from './utils/handleBodyTheme'
import { useUISettings } from './hooks/useUISettings'
import Loader from './components/Loader'
import { Redirect, useLocation, Route } from 'wouter'
import { routes } from './config/consts'
import { handleScroll } from './utils/handleScroll'
const Contact = lazy(() => import('./components/Contact'))
const NavBar = lazy(() => import('./components/NavBar'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const AnimatedRoute = lazy(() => import('./components/AnimatedRoute'))
const ScrollTopButton = lazy(() => import('./components/ScrollTopButton'))
const StatusBar = lazy(() => import('./components/StatusBar'))
const Thanks = lazy(() => import('./components/Thanks'))

export default function App () {
  const { theme } = useUISettings()
  handleBodyThemeChange(theme)
  handleScroll()

  const [location] = useLocation()

  return (
    <Suspense fallback={<Loader />}>
      {!location.includes('/thanks') && <NavBar />}

      <AnimatedRoute path='/'>
        <Home />
      </AnimatedRoute>

      <AnimatedRoute path='/about'>
        <About />
      </AnimatedRoute>

      <AnimatedRoute path='/contact'>
        <Contact />
      </AnimatedRoute>

      <Route path='/thanks'>
        <Thanks />
      </Route>

      {!routes.includes(location) && <Redirect to='/' />}

      {!location.includes('/thanks') && <StatusBar />}

      <ScrollTopButton />

    </Suspense>
  )
}
