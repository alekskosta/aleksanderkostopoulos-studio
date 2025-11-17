import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/payload-types'
import styles from './ProjectSection.module.css'

type ProjectSectionProps = {
  projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section id="projectSection">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectSection}>
        {projects.map((proj) => (
          <article key={proj.id}>
            <img src="/images/transparent_woodThree.png" alt="" className="woodThree" />
            <img src="/images/transparent_woodThree.png" alt="" className="woodThree2" />
            <img src="/images/pink_leafs.png" alt="" className="pinkLeafs" />
            <img src="/images/transparent_leaf.png" alt="" className="leaf" />

            {typeof proj.photo !== 'number' && proj.photo?.url ? (
              <div className={styles.projImage}>
                <Image
                  className={styles.projectSectionImage}
                  src={proj.photo.url}
                  alt={proj.photo.alt ?? proj.title}
                  width={proj.photo.width ?? 1200}
                  height={proj.photo.height ?? 675}
                />
              </div>
            ) : null}

            <div className={styles.projText}>
              <h3 className={styles.projTitle}>{proj.title}</h3>
              <p>{proj.about}</p>
              <div className={styles.projectSectionBtn}>
                <Link href={`${proj.slug}`} className={styles.projectBtn}>
                  READ MORE
                </Link>
                <Link href="mailto:aleksander.kostopoulos@gmail.com" className={styles.projectBtn}>
                  BOOKING
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
