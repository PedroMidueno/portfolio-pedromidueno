// languages
export const ES = 'es'
export const EN = 'en'

// themes
export const LIGHT = 'light'
export const DARK = 'dark'

// styles for routes animations
export const duration = 200

const entering = {
  position: 'absolute',
  display: 'block',
  opacity: 0,
  transform: 'scale(1.1)'
}

const entered = {
  display: 'block',
  opacity: 1,
  transform: 'scale(1)'
}

const exiting = {
  display: 'block',
  opacity: 0,
  transform: 'scale(0.9)'
}

const exited = {
  display: 'none',
  opacity: 0
}

export const defaultStyles = {
  opacity: 0,
  display: 'none',
  transition: `all ${duration}ms ease`
}
export const transitionStyles = {
  entering,
  entered,
  exiting,
  exited
}

// Routes
export const routes = ['/', '/about', '/contact', '/thanks']

// Social Links
export const githubLink = 'https://github.com/PedroMidueno'
export const linkedinLink = 'https://www.linkedin.com/in/pedromidueno/'
export const whatsappLink = 'https://wa.me/527442818460'
