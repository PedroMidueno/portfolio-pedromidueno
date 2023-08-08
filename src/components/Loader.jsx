import { DotPulse } from '@uiball/loaders'
import styles from '../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <DotPulse
        size={50}
        speed={1.3}
        color='var(--light-color)'
      />
    </div>
  )
}

export default Loader
