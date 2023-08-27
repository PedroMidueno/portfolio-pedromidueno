import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { goTop } from '../utils/handleScroll'

const ScrollTopButton = () => {
  return (
    <button id='scroll-top-button' onClick={goTop}>
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  )
}

export default ScrollTopButton
