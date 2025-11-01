import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import HeroSection from '@/components/sections/HeroSection'
import WelcomeSection from '@/components/sections/WelcomeSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
    </>
  )
}
