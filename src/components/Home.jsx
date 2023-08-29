import Tech from './Tech'
import Projects from './Projects'
import styles from '../styles/Home.module.css'
import { music, basketball, geek, dev, github, linkedin, developer } from '../assets/images'
import { useUISettings } from '../hooks/useUISettings'
import { main } from '../config/languages'
import { EN, ES, LIGHT, githubLink, linkedinLink } from '../config/consts'

const Home = () => {
  const { lang, theme } = useUISettings()

  return (
    <main>
      <section>

        <div className={styles.presentation}>
          <h2 className={theme === LIGHT && styles.light}>
            {lang === ES && main.saludo.es}
            {lang === EN && main.saludo.en}
          </h2>
          <h1>Pedro Midueño</h1>
          <span className={theme === LIGHT && styles.light}>
            {lang === ES && main.dev.es}
            {lang === EN && main.dev.en}
            <img src={dev} alt='' />
          </span>
          <span className={theme === LIGHT && styles.light}>
            Geek
            <img src={geek} alt='' />
          </span>
          <span className={theme === LIGHT && styles.light}>
            {lang === ES && main.nba.es}
            {lang === EN && main.nba.en}
            <img src={basketball} alt='' />
          </span>
          <span className={theme === LIGHT && styles.light}>
            {lang === ES && main.music.es}
            {lang === EN && main.music.en}
            <img src={music} alt='' />
          </span>

          <div className={styles.buttons}>
            <a href={linkedinLink} target='_blank' rel='noreferrer'>
              <img src={linkedin} alt='' />
              LinkedIn
            </a>

            <a href={githubLink} target='_blank' rel='noreferrer'>
              <img src={github} alt='' />
              GitHub
            </a>
          </div>
        </div>

        <img src={developer} alt='' />

      </section>

      <hr className={theme === LIGHT && styles.light} />
      <div>
        <Tech />
      </div>
      <hr className={theme === LIGHT && styles.light} />
      <Projects />
    </main>

  )
}

export default Home
