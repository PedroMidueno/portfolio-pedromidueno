import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/ProjectCard.module.css'
import { LIGHT, ES } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings'

const ProjectCard = ({ title, image, repo, deploy, tech, description }) => {
  const { theme, lang } = useUISettings()

  return (
    <article className={`${styles.project_card} ${theme === LIGHT ? styles.light : undefined}`}>

      <div className={styles.image_container}>
        <img src={image} alt={`Image of ${title} project`} />
      </div>

      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <p>
          {lang === ES ? description.es : description.en}
        </p>
        <div className={styles.tech_container}>
          {tech.map(tech => {
            return (
              <img src={tech} alt='tech' key={tech} className={styles.tech} />
            )
          })}
        </div>

        <div className={styles.links}>
          <a href={repo} target='_blank' rel='noreferrer' title={lang === ES ? 'Repositorio' : 'Repository'}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={deploy} target='_blank' rel='noreferrer' title={lang === ES ? 'Ver proyecto' : 'Watch project'}>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>

    </article>
  )
}

export default ProjectCard
