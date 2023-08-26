import Tech from './Tech'
import styles from '../styles/Home.module.css'
import { music, basketball, geek, dev, github, linkedin, developer } from '../assets/images'
// import { developer } from '../assets/svg'
import { useUISettings } from '../hooks/useUISettings'
import { main } from '../config/languages'
import { EN, ES, LIGHT, githubLink, linkedinLink } from '../config/consts'

const Home = () => {
  const { lang, theme } = useUISettings()

  return (
    <main>
      <section>

        <div className={styles.presentation}>
          <h2>
            {lang === ES && main.saludo.es}
            {lang === EN && main.saludo.en}
          </h2>
          <h1>Pedro Midueño</h1>
          <span>
            {lang === ES && main.dev.es}
            {lang === EN && main.dev.en}
            <img src={dev} alt='' />
          </span>
          <span>
            Geek
            <img src={geek} alt='' />
          </span>
          <span>
            {lang === ES && main.nba.es}
            {lang === EN && main.nba.en}
            <img src={basketball} alt='' />
          </span>
          <span>
            {lang === ES && main.music.es}
            {lang === EN && main.music.en}
            <img src={music} alt='' />
          </span>

          <div className={styles.buttons}>
            <a href={linkedinLink} target='_blank' rel='noreferrer'>
              <button>
                <img src={linkedin} alt='' />
                LinkedIn
              </button>
            </a>

            <a href={githubLink} target='_blank' rel='noreferrer'>
              <button>
                <img src={github} alt='' />
                GitHub
              </button>
            </a>

          </div>
        </div>

        <img src={developer} alt='' />

      </section>

      <hr className={theme === LIGHT && styles.light} />
      <div>
        <Tech />
      </div>

    </main>
  )
}

export default Home
