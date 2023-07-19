import en from '../assets/img/en.png'
import es from '../assets/img/es.png'
import styles from '../styles/LanguageSwitch.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../redux/slices/settingSlice'
import { EN, LIGHT } from '../config/consts'

export const LanguageSwitch = () => {
    const { lang, theme } = useSelector(state => {
        return state.settings
    })
    const dispatch = useDispatch()

    const switchLang = () => {
        const flags = document.getElementById('flags')
        flags.classList.toggle(styles.english)
        dispatch(changeLanguage())
    }
    return (
        <button
            className={`${styles.switch} 
            ${lang === EN ? styles.english : null}
            ${theme === LIGHT ? styles.light : null}`}
            onClick={switchLang}
        >
            <div className={styles.flags} id='flags' >
                <img src={es} alt="ES" />
                <img src={en} alt="EN" />
            </div>
        </button>
    )
}

