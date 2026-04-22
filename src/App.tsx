import Footer from './components/Footer'
import Header from './components/Header'
import Section1 from './components/sections/Section1'
import Section2 from './components/sections/Section2'
import Section3 from './components/sections/Section3'

// Canvas Components for each section

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Header />
      <main className="flex-1">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </div>
  )
}