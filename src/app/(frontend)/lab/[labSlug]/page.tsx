import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

  if (!lab) {
    notFound()
  }

  return (
    <section className={styles.labSlugSection}>
      <div className={styles.labSlugTitleContainer}>
        <h1 className={styles.labSlugTitle}>{lab.title}</h1>
        <Link href="/lab" aria-label="Back to Lab" className={styles.labSlugLink}>
          ← Back to lab
        </Link>
      </div>
      <article className={styles.labSlugArticle}>
        <div className={styles.labSlugMedia}>
          {typeof lab.photo !== 'number' && lab.photo?.url ? (
            <Image
              className={styles.labSlugImage}
              src={lab.photo.url}
              alt={lab.photo.alt ?? lab.title}
              fill
              sizes="(max-width: 950px) 100vw, 50vw"
              priority
            />
          ) : null}
        </div>
        <div className={styles.labSlugContent}>
          <RichText data={lab.content} className={styles.labSlugText} />
        </div>
      </article>
    </section>
  )
}
