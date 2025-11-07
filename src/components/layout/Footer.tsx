import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="/images/transparent_footer_flower.png"
        alt=""
        className={styles.footerFlowerRight}
      />
      <img src="/images/transparent_footer_flower.png" alt="" className={styles.footerFlowerLeft} />
      <article className={styles.footerText}>
        <h2>
          <Link href="/" className={styles.footerLink}>
            Home{' '}
          </Link>{' '}
        </h2>

        <div className={styles.icons}>
          <Link
            href="https://www.facebook.com/alekskostopoulos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open facebook.com"
            className={styles.footerLink}
          >
            <Image
              src="/images/icons/facebook-icon-cropped.png"
              alt="facebook-icon"
              width={30}
              height={30}
              className={styles.icon}
            />
          </Link>

          <Link
            href="mailto:aleksanderkostopoulos@gmail.com"
            aria-label="Send email to aleksanderkostopoulos@gmail.com"
            className={styles.footerLink}
          >
            <Image
              src="/images/icons/gmail-icon-cropped.png"
              alt="gmail-icon"
              width={30}
              height={30}
              className={styles.icon}
            />
          </Link>

          <Link
            href="https://www.instagram.com/alekskosta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open instagram.com"
            className={styles.footerLink}
          >
            <Image
              src="/images/icons/instagram-icon-cropped.png"
              alt="instagram-icon"
              width={30}
              height={30}
              className={styles.icon}
            />
          </Link>

          <Link
            href="https://open.spotify.com/artist/47UTr7lZZaowVfzAyOuZkW?si=dPdKnZm8TcGuWacCVl8Skw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open spotify"
            className={styles.footerLink}
          >
            <Image
              src="/images/icons/spotify-icon-cropped.png"
              alt="spotify-icon"
              width={30}
              height={30}
              className={styles.icon}
            />
          </Link>

          <Link
            href="https://www.youtube.com/@aleksanderkostopoulos7978"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open youtube.com"
            className={styles.footerLink}
          >
            <Image
              src="/images/icons/youtube-icon-cropped.png"
              alt="youtube-icon"
              width={30}
              height={30}
              className={styles.icon}
            />
          </Link>
        </div>

        <nav aria-label="Hovedmeny">
          <ul className="mainNav">
            <li>
              <Link href="/about" className="navLink">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogg" className="navLink">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/lab" className="navLink">
                Lab
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/alekskosta"
                target="_blank"
                rel="noopener noreferrer"
                className="navLink"
              >
                Github
              </Link>
            </li>
            <li>
              <Link href="/blogg" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <small>Aleksander Kostopoulos</small>
        <hr className={styles.line} />
        <small>© All rights reserved 2025</small>
      </article>
    </footer>
  )
}
