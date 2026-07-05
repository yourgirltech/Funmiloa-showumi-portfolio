import { useState } from 'react'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Cursor from '@/components/layout/Cursor'
import Loader from '@/components/layout/Loader'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Approach from '@/components/sections/Approach'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <SmoothScroll>
      <Loader onComplete={() => setLoaded(true)} />
      <Cursor />
      <div className="grain" />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Approach />
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </SmoothScroll>
  )
}

export default App
