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
        <img src={html} alt='HTML logo' title='HTML' />
        <img src={css} alt='CSS logo' title='CSS' />
        <img src={js} alt='JavaScript logo' title='JavaScript' />
        <img src={react} alt='React logo' title='React' />
        <img src={redux} alt='Redux logo' title='Redux' />
      </div>

      <div className={styles.tech_wrapper}>
        <img src={node} alt='Node logo' title='Node' />
        <img src={express} alt='Express logo' title='Express' />
        <img src={postgre} alt='Postgre logo' title='PostgreSQL' />
        <img src={sequelize} alt='Sequelize logo' title='Sequelize' />
        <img src={git} alt='Git logo' title='Git' />
      </div>
    </section>
  )
}

export default Tech
