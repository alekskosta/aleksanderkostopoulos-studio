import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className={styles.about}>
      <img
        src="/images/transparent_woodThree.png"
        alt="Shimmering flower"
        className={styles.crystalThreeLeft}
      />
      <img
        src="/images/transparent_woodThree.png"
        alt="Shimmering flower"
        className={styles.crystalThreeRight}
      />
      <h1 className={styles.aboutTitle}>Contact</h1>
      <article className={styles.aboutArticle}>
        <div className={styles.aboutText}>
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
          className={styles.aboutImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 600px"
        />
      </article>
    </section>
  )
}
