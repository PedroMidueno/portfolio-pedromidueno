import { Link, useRoute } from 'wouter'
import styles from '../styles/CustomLink.module.css'
import { useUISettings } from '../hooks/useUISettings'
import { LIGHT } from '../config/consts'

const CustomLink = ({ path, children }) => {
    const [match] = useRoute(path)
    const { theme } = useUISettings()

    return (
        <Link href={path}>
            <a className={`${styles.link} ${match && styles.active} ${theme === LIGHT && styles.light}`}>
                {children}
            </a>
        </Link >
    )
}

export default CustomLink