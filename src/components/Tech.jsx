import { html, css, js, react, redux, node, express, postgre, sequelize, git } from '../assets/images'
import styles from '../styles/Tech.module.css'
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN } from '../config/consts'
import { Tech as tech } from '../config/languages'

const Tech = () => {
  const { lang } = useUISettings()

  return (
    <section className={styles.tech}>
      <h3 className={styles.title}>
        {lang === ES && tech.es}
        {lang === EN && tech.en}
      </h3>

      <div className={styles.tech_wrapper}>
        <img src={html} alt='HTML logo' />
        <img src={css} alt='CSS logo' />
        <img src={js} alt='JavaScript logo' />
        <img src={react} alt='React logo' />
        <img src={redux} alt='Redux logo' />
      </div>

      <div className={styles.tech_wrapper}>
        <img src={node} alt='Node logo' />
        <img src={express} alt='Express logo' />
        <img src={postgre} alt='Postgre logo' />
        <img src={sequelize} alt='Sequelize logo' />
        <img src={git} alt='Git logo' />
      </div>
    </section>
  )
}

export default Tech
