import styles from '../styles/ThemeSwitch.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeTheme } from '../redux/slices/UISettingSlice'
import { LIGHT } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings';

const ThemeSwitch = () => {
    const { theme } = useUISettings()

    const dispatch = useDispatch()

    const switchTheme = () => {
        const themeSwitch = document.getElementById('theme-switch')
        themeSwitch.classList.toggle(styles.light)
        dispatch(changeTheme())
    }

    return (
        <button
            className={`${styles.switch} ${theme === LIGHT ? styles.light : null}`}
            id="theme-switch"
            onClick={switchTheme}
        >
            <span>
                <FontAwesomeIcon icon={faMoon} />
            </span>
            <span>
                <FontAwesomeIcon icon={faSun} />
            </span>
        </button>
    )
}

export default ThemeSwitch

