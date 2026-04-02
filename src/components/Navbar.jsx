import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home ', href: '#home' },
    { label: 'Skills ', href: '#skills' },
    { label: 'Achievements ', href: '#achievements' },
  ]

  return (
    <nav
      id="main-nav"
      className={`animate-nav-glow fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] sm:w-auto rounded-full border border-white/10 px-6 py-3 backdrop-blur-xl
        transition-colors duration-500 shadow-xl
        ${scrolled ? 'bg-[rgba(10,10,20,0.92)]' : 'bg-[rgba(10,10,20,0.7)]'}`}
    >
      <div className="relative flex items-center justify-between sm:justify-center gap-4 sm:gap-10">
        {/* Left: Name */}
        <a href="#home" className="font-bold text-white text-lg tracking-wide hover:text-neon-pink transition-colors duration-300 whitespace-nowrap">
          Samiha Shahin
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-1.5 text-sm font-medium text-gray-300 rounded-full
                hover:text-white hover:bg-white/5 transition-all duration-300
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:w-0 after:h-[2px] after:bg-neon-pink after:rounded-full
                hover:after:w-1/2 after:transition-all after:duration-300"
            >
              {l.label.replace(' |', '')}
            </a>
          ))}
        </div>

        {/* Right: Hire Me + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            id="hire-me-btn"
            className="px-5 py-2 rounded-full text-sm font-semibold text-black
              bg-neon-yellow shadow-[0_0_15px_rgba(224,255,0,0.4),0_0_30px_rgba(224,255,0,0.15)]
              hover:shadow-[0_0_25px_rgba(224,255,0,0.6),0_0_50px_rgba(224,255,0,0.3)]
              hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1 shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-4 rounded-2xl bg-[rgba(10,10,20,0.95)] backdrop-blur-xl border border-white/10 md:hidden flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-300 rounded-xl hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {l.label.replace(' |', '')}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
