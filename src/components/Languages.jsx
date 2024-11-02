import styles from '../styles/Languages.module.css'
import { ES, LIGHT } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings'
import { languages } from '../assets/images'
import { es, en } from '../assets/svg'

const Languages = () => {
  const { lang, theme } = useUISettings()

  return (
    <section className={styles.container}>
      <h3 className={`${styles.title} ${theme === LIGHT ? styles.light : undefined}`}>
        {lang === ES ? 'Idiomas' : 'Languages'}
      </h3>

      <article className={styles.lang_container}>

        <img src={languages} alt='Languages Image' className={styles.langs_img} />

        <section className={styles.cards_container}>

          <article className={`${styles.card} ${theme === LIGHT ? styles.light : undefined}`}>
            <img src={es} alt='Spanish' className={styles.lang_img} />
            <div className={styles.text}>
              <span className={styles.lang}>
                {lang === ES ? 'Español' : 'Spanish'}
              </span>
              <span className={styles.lang_level}>
                {lang === ES ? 'Nativo' : 'Native'}
              </span>
            </div>
          </article>

          <article className={`${styles.card} ${theme === LIGHT ? styles.light : undefined}`}>
            <img src={en} alt='English' className={styles.lang_img} />
            <div className={styles.text}>
              <span className={styles.lang}>
                {lang === ES ? 'Inglés (C1)' : 'English (C1)'}
              </span>
              <span className={styles.lang_level}>
                {lang === ES ? 'Certificado por ' : 'Certified by '}
                <a href='https://www.efset.org/cert/NbA5Bk' target='_blank' rel='noreferrer' className={styles.link}>
                  EF SET
                </a>
              </span>
            </div>
          </article>

        </section>

      </article>

    </section>
  )
}

export default Languages
