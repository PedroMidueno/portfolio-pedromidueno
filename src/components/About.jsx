import Education from './Education'
import Certificates from './Certificates'
import Languages from './Languages'
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT } from '../config/consts'
import { me } from '../assets/images'
import styles from '../styles/About.module.css'

const About = () => {
  const { lang, theme } = useUISettings()

  return (
    <section className={styles.about}>

      <article className={styles.me}>

        {lang === ES &&
          <p className={styles.description}>
            <span className={styles.name}>Pedro Midueño</span> es un Desarrollador Web Full Stack con un <span className={styles.marked}>background en Ingeniería Electromecánica</span>, ansioso por encontrar nuevos retos que me impulsen a <span className={styles.marked}>crecer profesionalmente</span> en esta área de la programación, apasionado con crear nuevos proyectos y con el sueño de poder participar en la creacion de productos y soluciones digitales que sean usadas por miles de usuarios. Tratando de <span className={styles.marked}>mejorar mis habilidades tanto técnicas como blandas</span>, para cada día poder ser un desarrollador más profesional y de mayor valor para la industria.
          </p>}

        {lang === EN &&
          <p className={styles.description}>
            <span className={styles.name}>Pedro Midueño</span> is a Full Stack Web Developer with a <span className={styles.marked}>background in Electromechanical Engineering</span>, eager to find new challenges that drive me to <span className={styles.marked}>grow professionally</span> in this area of programming, passionate about creating new projects and with the dream of being able to participate in the creation of products and digital solutions that are used by thousands of users. Trying to <span className={styles.marked}>improve my technical and soft skills</span>, so that every day I can be a more professional developer and of greater value to the industry.
          </p>}

        <img src={me} alt='About Image' className={styles.img} />
      </article>

      <hr className={theme === LIGHT ? styles.light : undefined} />

      <Education />

      <hr className={theme === LIGHT ? styles.light : undefined} />

      <Certificates />

      <hr className={theme === LIGHT ? styles.light : undefined} />

      <Languages />

    </section>
  )
}

export default About
