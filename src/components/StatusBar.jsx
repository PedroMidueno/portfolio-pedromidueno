import { available } from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'wouter'
import { useUISettings } from '../hooks/useUISettings'
import { ES, LIGHT } from '../config/consts'

const StatusBar = () => {
  const { lang, theme } = useUISettings()

  return (
    <article className='status-bar'>
      <Link href='/contact'>
        <div className={`${'available-button'} ${theme === LIGHT ? LIGHT : undefined}`}>
          <img src={available} alt='Available image' />
          {lang === ES ? 'Disponible para trabajar' : 'Open to work'}
        </div>
      </Link>

      <a
        href='https://drive.google.com/drive/folders/1eclJdVAkwNHy7RHHaVkvZjZHv0mDwhcr?usp=sharing'
        target='_blank' rel='noreferrer'
        className={`${'cv-download-button'} ${theme === LIGHT ? LIGHT : undefined}`}
      >
        <span className='download-logo'>
          <FontAwesomeIcon icon={faFileArrowDown} />
        </span>
        {lang === ES ? 'Descargar CV' : 'View Resume'}
      </a>
    </article>
  )
}

export default StatusBar
