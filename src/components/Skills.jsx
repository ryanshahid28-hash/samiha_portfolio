import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Python', level: 40, icon: '🐍' },
  { name: 'HTML', level: 80, icon: '🌐' },
  { name: 'CSS', level: 60, icon: '🎨' },
  { name: 'JavaScript', level: 40, icon: '⚡' },
  { name: 'Bootstraps', level: 60, icon: '🅱️' },
]

function SkillBar({ name, level, icon, animate }) {
  return (
    <div className="group flex w-full flex-col items-center">
      <div className="mb-2 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center">
        <span className="text-lg leading-none">{icon}</span>
        <span className="font-semibold text-sm tracking-wide text-white">{name}</span>
        <span className="min-w-[2.75rem] font-mono text-xs font-bold tabular-nums text-neon-pink">
          {level}%
        </span>
      </div>
      <div className="relative h-3 rounded-full bg-white/5 border border-white/5 overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="skill-bar-fill absolute inset-y-0 left-0 rounded-full transition-[width,box-shadow] duration-[1.5s] ease-out"
          style={{
            '--target-width': `${level}%`,
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, #ff2a85, #b700ff ${level > 50 ? '60%' : '80%'}, #ff2a85)`,
            boxShadow: animate
              ? '0 0 12px rgba(255,42,133,0.5), 0 0 25px rgba(255,42,133,0.2), inset 0 1px 0 rgba(255,255,255,0.15)'
              : 'none',
          }}
        />
        {/* Shimmer effect */}
        <div
          className="absolute inset-y-0 left-0 rounded-full opacity-30 transition-[width] duration-[1.5s] ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: animate ? 'skill-shimmer 2s linear infinite' : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)
        // Two rAFs so the browser paints opacity-0 / width 0 before we switch (transitions actually run).
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimate(true))
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative flex flex-col items-center py-24 px-6">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,42,133,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
            <span className="text-xs font-mono text-neon-pink uppercase tracking-widest">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-purple">Skills</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            {'>'} loading skill_matrix.dat<span className="terminal-cursor" />
          </p>
        </div>

        {/* Skill bars — observe this card so fills/stagger start when the box is actually in view */}
        <div
          ref={cardRef}
          className="flex w-full flex-col items-center space-y-6 rounded-2xl border border-white/5 bg-dark-card p-8
            shadow-[0_0_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`w-full transform transition-[opacity,transform] duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              <SkillBar {...skill} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
