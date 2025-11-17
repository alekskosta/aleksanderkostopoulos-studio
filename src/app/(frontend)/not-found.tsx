import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
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
