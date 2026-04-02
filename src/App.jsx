import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Container from './components/Container'

export default function App() {
  return (
    <div style={{ height: 'auto', minHeight: '100vh' }} className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-dark-bg text-gray-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start w-full max-w-[100vw] gap-24 sm:gap-32 pb-20 pt-10">
        <Hero />
        <Container>
          <Skills />
        </Container>
        <Container>
          <Achievements />
        </Container>
        <Container>
          <Contact />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
