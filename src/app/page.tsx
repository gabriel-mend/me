'use client'

import { AboutSection, HeroSection } from '@/components/pages/Home'
import { SkillsSection } from '@/components/pages/Home/SkillsSection/SkillsSection'
import { Page } from '@/components/shared/layout'

export default function Home() {
  return (
    <Page>
      <Page.Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </Page>
  )
}
