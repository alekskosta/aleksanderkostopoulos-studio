import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

type PageParams = {
  params: Promise<{ labSlug: string }>
}

export default async function LabPost({ params }: PageParams) {
  const { labSlug } = await params
  const payload = await getPayload({ config })

  const queryResult = await payload.find({
    collection: 'labs',
    where: {
      slug: {
        equals: labSlug,
      },
    },
  })

  const lab = queryResult.docs[0]

  return (
    <section className={styles.labSlugSection}>
      <h1 className={styles.labSlugTitle}>{lab.title}</h1>
      <Link href="/lab" aria-label="Back to Lab" className={styles.labSlugLink}>
        ← Back to lab
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
