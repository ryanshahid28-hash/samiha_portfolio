import { useRef } from 'react'

const CODE_SNIPPETS = [
  'const agi = await loadCore();',
  'if (neural.ready) execute();',
  'import { mind } from "agi";',
  'class Synapse extends Net {}',
  'async function think() {}',
  'return consciousness.init();',
  'let dream = new Matrix(42);',
  'export default AGI_CORE;',
  'while (learning) evolve();',
  'const soul = compile(data);',
  'net.train(epochs=1000);',
  'await transformer.forward();',
  'tensor.reshape([256, 512]);',
  'gradient.backward().step();',
  'model.save("checkpoint");',
  'loss = criterion(pred, y);',
]

function CodeRain() {
  const columns = 18
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.14]">
      {Array.from({ length: columns }).map((_, i) => {
        const left = (i / columns) * 100
        const duration = 15 + Math.random() * 25
        const delay = Math.random() * -30
        const opacity = 0.3 + Math.random() * 0.7
        return (
          <div
            key={i}
            className="absolute code-rain-line font-mono text-[10px] text-neon-pink whitespace-nowrap"
            style={{
              left: `${left}%`,
              top: '-100%',
              '--duration': `${duration}s`,
              '--delay': `${delay}s`,
              '--opacity': opacity,
              writingMode: 'vertical-rl',
            }}
          >
            {CODE_SNIPPETS.sort(() => Math.random() - 0.5).slice(0, 6).join('\n')}
          </div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-20 sm:pt-28"
    >
      {/* Code rain background */}
      <CodeRain />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,42,133,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,0,255,0.05)_0%,transparent_60%)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,42,133,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,42,133,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-10 px-6 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 xl:gap-14"
      >
        {/* Left column — copy & CTAs (~60% via flex 6) */}
        <div className="flex min-w-0 flex-[6] flex-col text-left lg:max-w-none">
          {/* Top tag — system status */}
          <p className="hero-animate hero-animate-delay-1 mb-4 font-mono text-sm text-gray-400 sm:mb-5 sm:text-base">
            <span className="text-neon-pink">{'>'}</span>{' '}
            <span>System Status:</span>{' '}
            <span className="font-semibold text-terminal-green">Online</span>{' '}
            <span className="text-gray-600">//</span>{' '}
            <span className="font-semibold text-terminal-green">AGI_CORE_LOADED</span>
            <span className="terminal-cursor" />
          </p>

          {/* Main heading with glitch */}
          <div className="hero-animate hero-animate-delay-2 mb-5 lg:mb-6">
            <h1
              className="glitch-text text-left text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
              data-text="SAMIHA SHAHIN"
            >
              <span className="relative z-[1]">SAMIHA SHAHIN</span>
            </h1>
          </div>

          {/* Bio */}
          <p className="hero-animate hero-animate-delay-3 mb-8 max-w-xl text-base font-light leading-relaxed text-gray-400 sm:text-lg lg:mb-10">
            Waiting for AGI. I live to experiment.
            <br />
            <span className="text-gray-300">Content, games, and tools.</span>
          </p>

          {/* CTA buttons */}
          <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="group rounded-full border border-neon-pink/30 bg-neon-pink/10 px-7 py-3 text-sm font-semibold text-neon-pink
                transition-all duration-400 hover:border-neon-pink/50 hover:bg-neon-pink/20 hover:shadow-[0_0_30px_rgba(255,42,133,0.3)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="mr-2 font-mono opacity-60">$</span>
              explore --skills
            </a>
            <a
              href="#contact"
              className="group rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white
                transition-all duration-400 hover:border-white/20 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="mr-2 font-mono opacity-60">$</span>
              contact --init
            </a>
          </div>
        </div>

        {/* Right column — portrait (~40% via flex 4) */}
        <div className="hero-animate-from-right flex min-w-0 flex-[4] justify-center pb-4 lg:justify-end lg:pb-0">
          <div className="hero-portrait-glow">
            <img
              src="/image_8.png"
              alt="Samiha Shahin"
              className="hero-portrait-img"
              width={600}
              height={800}
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40 sm:bottom-10">
        <span className="font-mono text-xs text-gray-500">scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-gray-600 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-neon-pink" />
        </div>
      </div>
    </section>
  )
}
