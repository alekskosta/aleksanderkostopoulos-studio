import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/images/transparent_leafs.png"
        alt="Shimmering flower"
        className={styles.woodLeafs}
      />
      <p>
        <Link href="/" className={styles.brand}>
          Aleksander Kostopoulos
        </Link>
      </p>
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
    </header>
  )
}
