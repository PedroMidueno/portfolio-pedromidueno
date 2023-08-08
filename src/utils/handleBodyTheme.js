import { LIGHT, DARK } from '../config/consts'

export const handleBodyThemeChange = (theme) => {
  const body = document.querySelector('body')
  if (theme === LIGHT) {
    body.classList.add('light')
  } else if (theme === DARK) {
    body.classList.remove('light')
  }
}
