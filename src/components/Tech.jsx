import { node, postgre, git, ts, vue, pinia, nest, prismaLight, prismaDark, tailwind, nuxt } from '../assets/images'
import styles from '../styles/Tech.module.css'
import { useUISettings } from '../hooks/useUISettings'
import { ES, EN, LIGHT } from '../config/consts'
import { Tech as tech } from '../config/languages'

const Tech = () => {
  const { lang, theme } = useUISettings()

  return (
    <section className={styles.tech}>
      <h3 className={`${styles.title} ${theme === LIGHT && styles.light}`}>
        {lang === ES && tech.es}
        {lang === EN && tech.en}
      </h3>

      <div className={styles.tech_wrapper}>
        <img src={tailwind} alt='Tailwind CSS logo' title='Tailwind CSS' />
        <img src={ts} alt='TypeScript logo' title='TypeScript' />
        <img src={vue} alt='Vue logo' title='Vue' />
        <img src={nuxt} alt='Nuxt logo' title='Nuxt' />
        <img src={pinia} alt='Pinia logo' title='Pinia' />
      </div>

      <div className={styles.tech_wrapper}>
        <img src={node} alt='Node logo' title='Node' />
        <img src={nest} alt='Nest logo' title='Nest' />
        <img src={postgre} alt='Postgre logo' title='PostgreSQL' />
        <img src={theme === LIGHT ? prismaLight : prismaDark} alt='Prisma logo' title='Prisma ORM' />
        <img src={git} alt='Git logo' title='Git' />
      </div>
    </section>
  )
}

export default Tech
