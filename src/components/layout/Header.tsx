'use client'

import Link from 'next/link'
import styles from './Header.module.css'
import { Button } from '@payloadcms/ui'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={styles.header}>
      <img src="/images/transparent_leafs.png" alt="" className={styles.woodLeafs} />
      <p>
        <Link href="/" className={styles.brand}>
          Aleksander Kostopoulos
        </Link>
      </p>
      <nav aria-label="Hovedmeny">
        <Button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          aria-controls="meny"
        >
          <span aria-hidden="true">{open ? 'X' : '☰'}</span>
        </Button>
        <ul className={`mainNav ${open ? styles.show : ''}`} id="meny">
          <li>
            <Link href="/about" className="navLink">
              About
            </Link>
          </li>
          <li>
            <Link href="/#projectSection" className="navLink">
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
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
