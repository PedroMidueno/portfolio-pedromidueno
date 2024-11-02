import styles from '../styles/Education.module.css'
import { education } from '../assets/images'
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT } from '../config/consts'
import { education as educationLang } from '../config/languages'

const Education = () => {
  const { lang, theme } = useUISettings()
  const {
    // fullstack,
    // fullstackDescription,
    // fullstackSchool,
    engineer,
    engineerSchool,
    engineerDescription
  } = educationLang

  return (
    <article className={styles.container}>
      <h3 className={`${styles.title} ${theme === LIGHT ? styles.light : undefined}`}>
        {lang === ES ? 'Educación' : 'Education'}
      </h3>

      <div className={styles.education}>

        <img src={education} alt='education' />

        <div className={styles.timeline}>
          {/* <div className={styles.education_box}>
            <span className={styles.degree}>
              {lang === ES && fullstack.es}
              {lang === EN && fullstack.en}
            </span>
            <span className={styles.school}>
              {lang === ES && fullstackSchool.es}
              {lang === EN && fullstackSchool.en}
            </span>
            <p className={`${styles.description} ${theme === LIGHT ? styles.light : undefined}`}>
              {lang === ES && fullstackDescription.es}
              {lang === EN && fullstackDescription.en}
            </p>
          </div> */}

          <div className={styles.education_box}>
            <span className={styles.degree}>
              {lang === ES && engineer.es}
              {lang === EN && engineer.en}
            </span>
            <span className={styles.school}>
              {lang === ES && engineerSchool.es}
              {lang === EN && engineerSchool.en}
            </span>
            <p className={`${styles.description} ${theme === LIGHT ? styles.light : undefined}`}>
              {lang === ES && engineerDescription.es}
              {lang === EN && engineerDescription.en}
            </p>
          </div>
        </div>

      </div>
    </article>
  )
}

export default Education
