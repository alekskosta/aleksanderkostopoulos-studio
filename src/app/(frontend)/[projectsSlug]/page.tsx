import config from '@payload-config'
import { getPayload } from 'payload'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectRichText from './ProjectRichText'

type PageParams = {
  params: Promise<{ projectsSlug: string }>
}

export default async function ProjectPost({ params }: PageParams) {
  const { projectsSlug } = await params
  const payload = await getPayload({ config })

  const queryResult = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: projectsSlug,
      },
    },
    depth: 1,
  })

  const proj = queryResult.docs[0]

  if (!proj) {
    notFound()
  }

  return (
    <section className={styles.projectSlugSection}>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectSlugTitle}>{proj.title}</h1>
        <Link
          href="/#projectSection"
          aria-label="Back to projects"
          className={styles.projectSlugLink}
        >
          ← Back to projects
        </Link>
      </div>
      <article className={styles.projectSlugArticle}>
        <div className={styles.projectSlugMedia}>
          {typeof proj.photo !== 'number' && proj.photo?.url ? (
            <Image
              className={styles.projectSlugImage}
              src={proj.photo.url}
              alt={proj.photo.alt ?? proj.title}
              fill
              sizes="(max-width: 950px) 100vw, 50vw"
              priority
            />
          ) : null}
        </div>

        <div className={styles.projectSlugContent}>
          {proj.content ? <ProjectRichText content={proj.content} /> : null}
        </div>
      </article>
    </section>
  )
}
