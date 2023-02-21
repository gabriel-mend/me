import * as Landing from '@/components/screens/Home'
import { Page } from '@/components/shared/ui'

export default function Home() {
  return (
    <Page>
      <Page.Navbar />
      <Landing.HeroSection />
      <Landing.AboutSection />
      <Landing.SkillsSection />
      <Landing.ProjectsSection />
    </Page>
  )
}
