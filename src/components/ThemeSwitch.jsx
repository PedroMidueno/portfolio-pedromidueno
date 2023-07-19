import styles from '../styles/ThemeSwitch.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from '../redux/slices/settingSlice'
import { LIGHT } from '../config/consts'

const ThemeSwitch = () => {
    const { theme } = useSelector(state => {
        return state.settings
    })
    const dispatch = useDispatch()

    const switchTheme = () => {
        const themeSwitch = document.getElementById('theme-switch')
        themeSwitch.classList.toggle(styles.active)
        dispatch(changeTheme())
    }

    return (
        <button
            className={`${styles.switch} ${theme === LIGHT ? styles.active : null}`}
            id="theme-switch"
            onClick={switchTheme}
        >
            <span>
                <FontAwesomeIcon icon={faSun} />
            </span>
            <span>
                <FontAwesomeIcon icon={faMoon} />
            </span>
        </button>
    )
}

export default ThemeSwitch