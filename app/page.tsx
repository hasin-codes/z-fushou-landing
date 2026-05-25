import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-grid'
import StatsSection from '@/components/stats-4'
import TestimonialsSection from '@/components/testimonials'
import Pricing from '@/components/pricing'
import FAQsFour from '@/components/faq'
import FooterSection from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <Pricing />
      <FAQsFour />
      <FooterSection />
    </div>
  )
}
