import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { goTop } from '../utils/handleScroll'
import { useUISettings } from '../hooks/useUISettings'
import { ES } from '../config/consts'

const ScrollTopButton = () => {
  const { lang } = useUISettings()

  return (
    <button
      id='scroll-top-button'
      onClick={goTop}
      aria-label={`${lang === ES ? 'Regresar arriba' : 'Go top'}`}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  )
}

export default ScrollTopButton
