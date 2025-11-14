import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

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

  return (
    <section className={styles.projectSlugSection}>
      <h1 className={styles.projectSlugTitle}>{proj.title}</h1>
      <Link
        href="/#projectSection"
        aria-label="Back to projects"
        className={styles.projectSlugLink}
      >
        ← Back to projects
      </Link>
      <article className={styles.projectSlugArticle}>
        {typeof proj.photo !== 'number' && proj.photo?.url ? (
          <Image
            className={styles.projectSlugImage}
            src={proj.photo.url}
            alt={proj.photo.alt ?? proj.title}
            width={proj.photo.width ?? 1200}
            height={proj.photo.height ?? 675}
            priority
          />
        ) : null}
        <RichText data={proj.content} className={styles.projectSlugText} />
      </article>
    </section>
  )
}
