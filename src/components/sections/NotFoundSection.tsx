import Link from 'next/link'
import styles from './NotFoundSection.module.css'

export default function NotFoundSection() {
  return (
    <section className={styles.notFound}>
      <article className={styles.notFoundContent}>
        <h1>Page not found</h1>
        <p>The page you were looking for doesn&apos;t exist, or has been moved.</p>
        <Link href="/" className={styles.notFoundLink}>
          ← Back to home
        </Link>
      </article>
    </section>
  )
}
