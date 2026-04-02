import { useEffect, useRef, useState } from 'react'

const achievements = [
  {
    id: 1,
    title: 'Internal Hackathon 2025',
    description: 'Participated in the Coding Club Internal Hackathon at Kongu Engineering College, tackling development challenges under tight deadlines.',
    icon: '💻',
    tag: 'Hackathon',
    certificateSrc: '/certificates/certificate-1.png',
  },
  {
    id: 2,
    title: 'Infosys Python Certification',
    description: 'Successfully completed the comprehensive "Basics of Python" course via Infosys Springboard, mastering core programming workflows.',
    icon: '🐍',
    tag: 'Certification',
    certificateSrc: '/certificates/certificate-2.png',
  },
  {
    id: 3,
    title: "1st Prize: Innovation Day '26",
    description: 'Secured 1st position in Project Presentation for an "Automated Book Issue and Return Management System" at Nandha Educational Institutions.',
    icon: '🏆',
    tag: 'Award',
    certificateSrc: '/certificates/certificate-3.png',
  },
]

function AchievementCard({ title, description, icon, tag, index, certificateSrc }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.08, rootMargin: '0px 0px 10% 0px' }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={() => setIsFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsFlipped((v) => !v)
        }
      }}
      className={`flip-card group relative rounded-3xl border border-neon-pink/25
        bg-[rgba(20,5,40,0.5)] backdrop-blur-xl overflow-hidden
        min-h-[280px] sm:min-h-[300px]
        hover:border-neon-pink/55 transition-all duration-500 hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(183,0,255,0.2),0_0_80px_rgba(183,0,255,0.1)]
        transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        ${isFlipped ? 'is-flipped' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="card-inner">
        {/* Card front */}
        <div className="card-front">
          <div className="relative flex h-full flex-col items-center text-center p-8 sm:p-10">
            {/* Center top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-electric-purple/20 blur-[50px]
              group-hover:bg-electric-purple/30 group-hover:blur-[60px] transition-all duration-700 pointer-events-none" />

            {/* Tag */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/20 mb-6 group-hover:bg-electric-purple/20 transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-electric-purple shadow-[0_0_8px_#b700ff]" />
              <span className="text-[10px] sm:text-xs font-mono text-electric-purple uppercase tracking-widest font-semibold">{tag}</span>
            </div>

            {/* Icon */}
            <div className="relative z-10 text-5xl mb-6 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
              {icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric-purple group-hover:to-neon-pink transition-all duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm text-gray-400 leading-relaxed font-light">
              {description}
            </p>

            {/* Expanding bottom border on hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-electric-purple to-transparent group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        </div>

        {/* Card back */}
        <div className="card-back">
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 sm:p-10">
            {/* Neonscape border hint */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(255,42,133,0.12)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 w-full">
              {/* Swap certificate image paths below */}
              <img
                src={certificateSrc}
                alt={`${title} certificate`}
                className="w-full rounded-2xl border border-electric-purple/30 bg-black/20 shadow-[0_0_40px_rgba(183,0,255,0.12)]"
                draggable={false}
              />
            </div>

            <div className="relative z-10 text-center">
              <p className="font-mono text-xs text-gray-400">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative flex flex-col py-16 sm:py-24 w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,0,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/20 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-purple animate-pulse" />
            <span className="text-xs font-mono text-electric-purple uppercase tracking-widest">Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Achievements <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-neon-pink">Unlocked</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            {'>'} cat ~/achievements.log<span className="terminal-cursor" />
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
