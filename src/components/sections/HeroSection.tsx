import Image from 'next/image'
import styles from './HeroSection.module.css'
import MouseTrail from '../effects/MouseTrail'
import AmbientAudio from '../Audio/AmbientAudio'

export default function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image
            src="/images/heroImage.jpg"
            alt="Aleksander Kostopoulos"
            priority
            className={styles.image}
            sizes="100vw"
            width={1345}
            height={2048}
          />
        </div>

        <div className={styles.middleHeroText}>
          <h1 className={styles.heroTitle}>Creative Technologist & Audiovisual Artist </h1>
          <AmbientAudio
            src="/audio/audiovisualSite.mp3"
            title="Klangre Atmos"
            artist="Aleksander Kostopoulos"
          />

          <img
            src="/images/transparent_crystal.png"
            alt="Shimmering flower"
            className={styles.crystal}
          />

          <small className={styles.small}>
            Click and hover the images to join the installation
          </small>
        </div>

        <div className={styles.rightHeroText}>
          <h2>Drummer, Composer & Frontend Developer</h2>
          <img src="/images/transparent_flower.png" className={styles.flower} />
        </div>
      </section>
      <MouseTrail />
    </>
  )
}
