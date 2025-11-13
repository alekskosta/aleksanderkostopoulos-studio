import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

type PageParams = {
  params: Promise<{ projectsSlug: string }>
}

export default async function labPost({ params }: PageParams) {
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

  const lab = queryResult.docs[0]

  return (
    <section className={styles.labSlugSection}>
      <h1 className={styles.labSlugTitle}>{lab.title}</h1>
      <Link href="/#projectSection" aria-label="Back to projects" className={styles.labSlugLink}>
        ← Back to projects
      </Link>
      <article className={styles.labSlugArticle}>
        {typeof lab.photo !== 'number' && lab.photo?.url ? (
          <Image
            className={styles.labSlugImage}
            src={lab.photo.url}
            alt={lab.photo.alt ?? lab.title}
            width={lab.photo.width ?? 1200}
            height={lab.photo.height ?? 675}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 600px"
          />
        ) : null}
        <RichText data={lab.content} className={styles.labSlugText} />
      </article>
    </section>
  )
}
