import { useEffect, useRef, useState } from 'react'

const achievements = [
  {
    id: 1,
    title: 'Industry Internship',
    description: 'Completed a professional internship gaining hands-on experience in real-world tech workflows and production-grade systems.',
    icon: '💼',
    tag: 'Professional',
  },
  {
    id: 2,
    title: 'Inter-College Hackathon',
    description: 'Competed in a high-intensity inter-college hackathon, building innovative solutions under tight deadlines with cross-functional teams.',
    icon: '🏆',
    tag: 'Competition',
  },
  {
    id: 3,
    title: 'Cross-College Tech Fest',
    description: 'Participated in a cross-college tech fest, showcasing technical prowess and creative problem-solving across multiple challenges.',
    icon: '🚀',
    tag: 'Event',
  },
]

function AchievementCard({ title, description, icon, tag, index }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

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
      className={`group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl border border-electric-purple/30
        bg-[rgba(20,5,40,0.5)] backdrop-blur-xl overflow-hidden
        hover:border-electric-purple/60 transition-all duration-500 hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(183,0,255,0.2),0_0_80px_rgba(183,0,255,0.1)]
        transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
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
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,0,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
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
