import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import CardSection from './components/sections/CardSection'
import ScrollSection from './components/sections/ScrollSection'
import StickyShowcaseSection from './components/sections/StickyShowcaseSection'

// Canvas Components for each section

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Header />
      <main>
        <Hero />
        <CardSection />
        <ScrollSection />
        <StickyShowcaseSection />
      </main>
      <Footer />
    </div>
  )
}