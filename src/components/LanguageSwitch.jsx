import { en, es } from '../assets/svg/'
import styles from '../styles/LanguageSwitch.module.css'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../redux/slices/UISettingSlice'
import { EN, LIGHT } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings'

const LanguageSwitch = () => {
  const { lang, theme } = useUISettings()
  const dispatch = useDispatch()

  const switchLang = () => {
    const flags = document.getElementById('flags')
    flags.classList.toggle(styles.english)
    dispatch(changeLanguage())
  }
  return (
    <button
      className={`${styles.switch} 
            ${lang === EN && styles.english}
            ${theme === LIGHT && styles.light}`}
      onClick={switchLang}
    >
      <div className={styles.flags} id='flags'>
        <img src={es} alt='ES' />
        <img src={en} alt='EN' />
      </div>
    </button>
  )
}

export default LanguageSwitch
