import React from 'react'
import './styles.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  description:
    'Portfolio and lab for Aleksander Kostopoulos – creative technologist, drummer, composer, and audiovisual artist.',
  title: 'Aleksander Kostopoulos – Creative Technologist & Audiovisual Artist',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
