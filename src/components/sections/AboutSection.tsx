import Image from 'next/image'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h1 className={styles.aboutTitle}>About</h1>
      <article className={styles.aboutArticle}>
        <Image
          src="/images/heroImage.jpg"
          alt="Aleksander Kostopoulos"
          width={600}
          height={600}
          className={styles.aboutImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 600px"
        />
        <div className={styles.aboutText}>
          Aleksander Kostopoulos is a creative technologist, drummer and audiovisual composer
          working at the intersection of sound, light and code. He creates experiences where music,
          technology and visual poetry merge – existing somewhere between concert, installation and
          digital art. With a background as a performing musician and composer, he builds both music
          and visual systems from the ground up, using tools such as TouchDesigner, Ableton Live,
          React/Next.js and custom-built software. His work explores how rhythm, light and movement
          can influence each other in real time – whether inside a transparent illuminated cube, on
          a theatre stage or through a screen. Aleksander has released multiple albums and
          audiovisual works, composed music for dance, theatre and film, and performed with artists
          such as ISÁK, Mari Boine, Moddi and Ensemble Noor. He is particularly interested in
          creating spaces – physical or digital – where audiences don’t just listen, but experience
          music as a living visual landscape.
        </div>
      </article>
    </section>
  )
}
