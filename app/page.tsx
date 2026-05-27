import HeroSection from '@/components/hero-section'
import ShowcaseCards from '@/components/showcase-cards'
import FooterSection from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ShowcaseCards />
      <FooterSection />
    </div>
  )
}
