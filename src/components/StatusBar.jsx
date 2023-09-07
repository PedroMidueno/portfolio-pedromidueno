import { available } from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'wouter'

const StatusBar = () => {
  return (
    <article className='status-bar'>
      <Link href='/contact'>
        <a className='available-button'>
          <img src={available} alt='Available image' />
          Disponible para trabajar
        </a>
      </Link>

      <a href='https://drive.google.com/drive/folders/1eclJdVAkwNHy7RHHaVkvZjZHv0mDwhcr?usp=sharing' className='cv-download-button'>
        <FontAwesomeIcon icon={faFileArrowDown} />
        Descargar CV
      </a>
    </article>
  )
}

export default StatusBar
