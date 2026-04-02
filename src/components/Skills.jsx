import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Python', level: 40 },
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 60 },
  { name: 'JavaScript', level: 40 },
  { name: 'Bootstraps', level: 60 },
]

function SkillBar({ name, level, animate }) {
  return (
    <div className="group flex w-full flex-col mb-6 last:mb-0">
      <div className="mb-2.5 flex justify-between items-end w-full px-0.5">
        <span className="font-semibold text-base tracking-wide text-white">{name}</span>
        <span className="font-mono text-sm font-bold tabular-nums text-gray-300">
          {level}%
        </span>
      </div>
      <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="skill-bar-fill absolute inset-y-0 left-0 transition-[width,box-shadow] duration-[1.5s] ease-out rounded-full"
          style={{
            '--target-width': `${level}%`,
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, #ff2a85, #b700ff ${level > 50 ? '60%' : '80%'}, #ff2a85)`,
            boxShadow: animate
              ? '0 0 12px rgba(255,42,133,0.5), 0 0 25px rgba(255,42,133,0.2)'
              : 'none',
          }}
        />
        {/* Shimmer effect */}
        <div
          className="absolute inset-y-0 left-0 opacity-30 transition-[width] duration-[1.5s] ease-out rounded-full"
          style={{
            width: animate ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
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
    <section id="skills" ref={sectionRef} className="relative flex flex-col items-center py-16 sm:py-24 w-full">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,42,133,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-purple">Skills</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1.5px] bg-gray-600 rounded-full"></div>
            <p className="text-gray-300 font-medium text-sm sm:text-base tracking-wide whitespace-nowrap">
              What I Know ?
            </p>
            <div className="w-10 h-[1.5px] bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* 2-Column Card */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full rounded-3xl border border-white/5 bg-dark-card p-8 sm:p-12
            shadow-[0_0_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-pink"></span> Project
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink text-xs mt-1">✪</span>
                  <span>Portfolio (HTML, CSS, js, Bootstraps)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink text-xs mt-1">✪</span>
                  <span>app developer</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-purple"></span> Development Skills
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                I'm familiar & work on a daily basis with HTML, CSS, JavaScript React js and other modern frameworks.
              </p>
            </div>
          </div>

          {/* Right Column: Bars */}
          <div className="flex flex-col justify-center">
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
      </div>
    </section>
  )
}
