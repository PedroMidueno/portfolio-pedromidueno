import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'
import styles from '../styles/Projects.module.css'
import { ES, LIGHT } from '../config/consts'
import { useUISettings } from '../hooks/useUISettings'

const Projects = () => {
  const { lang, theme } = useUISettings()

  return (
    <>
      <h3 className={`${styles.title} ${theme === LIGHT && styles.light}`}>
        {lang === ES ? 'Proyectos' : 'Projects'}
      </h3>
      <section className={styles.projects_container}>
        {
          projects.map(project => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                repo={project.repo}
                deploy={project.deploy}
                tech={project.tech}
                description={project.description}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default Projects
