import Link from 'next/link'
import styles from './WelcomeSection.module.css'

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeTitle}>
        <h2>Hi there — I’m Aleksander Kostopoulos.</h2>
        <img src="/images/transparent_rock.png" alt="" className={styles.rock} />
      </div>

      <div className={styles.welcomeText}>
        <img src="/images/transparent_crystalCrab.png" alt="" className={styles.rockTwo} />
        <p>
          I’m a creative technologist and audiovisual artist exploring the intersection of sound,
          light, and code. With a background as a drummer and composer, my work blends rhythm,
          movement, and technology into immersive live experiences, websites and installations. You
          can explore more of my musical work at{' '}
          <Link
            href="https://aleksanderkostopoulos.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.welcomeLink}
          >
            aleksanderkostopoulos.com
          </Link>
        </p>
      </div>
    </section>
  )
}
