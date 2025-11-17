import { getPayload } from 'payload'
import config from '@payload-config'

import './styles.css'
import HeroSection from '@/components/sections/HeroSection'
import WelcomeSection from '@/components/sections/WelcomeSection'
import ProjectSection from '@/components/sections/ProjectSection'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const hero = await payload.findGlobal({ slug: 'hero', depth: 1 })
  const queryResult = await payload.find({
    collection: 'projects',
    depth: 1,
  })

  const projects = queryResult.docs

  return (
    <>
      <HeroSection hero={hero} />
      <WelcomeSection />
      <ProjectSection projects={projects} />
    </>
  )
}
