'use client'

import { AboutSection, HeroSection } from '@/components/pages/Home'
import { Page } from '@/components/shared/layout'

export default function Home() {
  return (
    <Page>
      <Page.Navbar />
      <HeroSection />
      <AboutSection />
    </Page>
  )
}
