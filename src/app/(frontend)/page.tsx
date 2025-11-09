import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'

import './styles.css'
import HeroSection from '@/components/sections/HeroSection'
import WelcomeSection from '@/components/sections/WelcomeSection'
import Link from 'next/link'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const queryResult = await payload.find({
    collection: 'projects',
  })

  const projects = queryResult.docs
  return (
    <>
      <HeroSection />
      <WelcomeSection />

      <section id="projectSection">
        <h2 className="projectsTitle">Projects</h2>
        <div className="projectSection">
          {projects.map((proj) => (
            <article key={proj.id}>
              <img
                src="/images/transparent_woodThree.png"
                alt="Shimmering flower"
                className="woodThree"
              />
              <img
                src="/images/transparent_woodThree.png"
                alt="Shimmering flower"
                className="woodThree2"
              />

              <img src="/images/pink_leafs.png" alt="Shimmering flower" className="pinkLeafs" />
              <img src="/images/transparent_leaf.png" alt="Shimmering flower" className="leaf" />

              {typeof proj.photo !== 'number' && proj.photo?.url ? (
                <div className="projImage">
                  <Image
                    className="projectSectionImage"
                    src={proj.photo.url}
                    alt={proj.photo.alt ?? proj.title}
                    width={proj.photo.width ?? 1200}
                    height={proj.photo.height ?? 675}
                  />
                </div>
              ) : null}
              <div className="projText">
                <h3 className="projTitle">{proj.title}</h3>
                <p>{proj.about}</p>
                <div className="projectSectionBtn">
                  <Link href={`${proj.slug}`} className="projectBtn">
                    READ MORE
                  </Link>
                  <Link href="mailto:aleksander.kostopoulos@gmail.com" className="projectBtn">
                    BOOKING
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
