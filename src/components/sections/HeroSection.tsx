import Image from 'next/image'
import styles from './HeroSection.module.css'
import MouseTrail from '../effects/MouseTrail'
import AmbientAudio from '../Audio/AmbientAudio'
import type { Hero, Photo } from '@/payload-types'

type HeroSectionProps = {
  hero: Hero
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const image = hero.image && typeof hero.image === 'object' ? (hero.image as Photo) : null
  const widescreen = image?.sizes?.widescreen
  const widescreenUrl = widescreen?.url ?? null

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          {image && widescreen && widescreenUrl ? (
            <Image
              src={widescreenUrl}
              alt={image.alt}
              priority
              className={styles.image}
              width={widescreen.width ?? 1345}
              height={widescreen.height ?? 2048}
            />
          ) : (
            <Image
              src="/images/aboutImage.jpg"
              alt="Aleksander Kostopoulos"
              priority
              className={styles.image}
              width={1345}
              height={2048}
            />
          )}
        </div>

        <div className={styles.middleHeroText}>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <AmbientAudio
            src="/audio/audiovisualSite.mp3"
            title="Klangre Atmos"
            artist="Aleksander Kostopoulos"
          />

          <img src="/images/transparent_crystal.png" alt="" className={styles.crystal} />

          <small className={styles.small}>
            Drift and hover the images to join the installation
          </small>
        </div>

        <div className={styles.rightHeroText}>
          <h2>{hero.subtitle}</h2>
          <img src="/images/transparent_flower.png" alt="" className={styles.flower} />
        </div>
      </section>
      <MouseTrail />
    </>
  )
}
