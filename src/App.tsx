import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Capabilities from '@/components/sections/Capabilities'
import Process from '@/components/sections/Process'
import Stack from '@/components/sections/Stack'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Work />
        <Capabilities />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
