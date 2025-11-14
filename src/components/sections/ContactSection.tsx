import Image from 'next/image'
import Link from 'next/link'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <img src="/images/transparent_woodThree.png" alt="" className={styles.crystalThreeLeft} />
      <img src="/images/transparent_woodThree.png" alt="" className={styles.crystalThreeRight} />

      <h1 className={styles.contactTitle}>Contact</h1>
      <article className={styles.contactArticle}>
        <div className={styles.contactText}>
          Whether you're interested in booking a performance, collaborating on a project,
          commissioning music or just saying hello — I'd love to hear from you:
          <Link
            href="mailto:aleksanderkostopoulos@gmail.com"
            aria-label="Send email to aleksanderkostopoulos@gmail.com"
            className={styles.contactLink}
          >
            aleksander.kostopoulos@gmail.com
          </Link>
        </div>
        <Image
          src="/images/contactImage.jpg"
          alt="Aleksander Kostopoulos"
          width={600}
          height={600}
          className={styles.contactImage}
          priority
        />
      </article>
    </section>
  )
}
