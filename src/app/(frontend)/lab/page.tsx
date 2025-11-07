import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default async function Lab() {
  const payload = await getPayload({ config })
  const queryResult = await payload.find({
    collection: 'labs',
  })

  const labs = queryResult.docs

  return (
    <section className={styles.lab}>
      <h1 className={styles.labTitle}>Lab</h1>
      <p className={styles.labText}>
        A playground for ideas in motion. Here I publish experiments connecting rhythm, light, and
        software: from quick sketches to working demos, from TouchDesigner patches to React
        components. This is the backstage of my practice.
      </p>
      <div className={styles.labGrid}>
        {labs.map((lab) => (
          <article key={lab.id} className={styles.labArticle}>
            {typeof lab.photo !== 'number' && lab.photo?.url ? (
              <Image
                className={styles.labImage}
                src={lab.photo.url}
                alt={lab.photo.alt ?? lab.title}
                width={lab.photo.width ?? 1200}
                height={lab.photo.height ?? 675}
              />
            ) : null}

            <h2 className={styles.titleArticle}>{lab.title}</h2>

            <p>{lab.intro}</p>

            {lab.createdAt && (
              <time dateTime={lab.createdAt} className={styles.timeArticle}>
                Posted on{' '}
                {new Date(lab.createdAt).toLocaleDateString('nb-NO', {
                  dateStyle: 'medium',
                  timeZone: 'Europe/Oslo',
                })}
              </time>
            )}

            <Link href={`/lab/${lab.slug}`} className={styles.btnArticle}>
              READ MORE
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
