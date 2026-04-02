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

// Deterministic "random" for lint friendliness (no Math.random during render).
function pseudoRand(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function CodeRain() {
  const columns = 18
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.14]">
      {Array.from({ length: columns }).map((_, i) => {
        const left = (i / columns) * 100
        const duration = 15 + pseudoRand(i + 1) * 25
        const delay = pseudoRand(i + 101) * -30
        const opacity = 0.3 + pseudoRand(i + 201) * 0.7

        const snippets = CODE_SNIPPETS
          .map((s, idx) => ({ s, r: pseudoRand(i * 100 + idx) }))
          .sort((a, b) => a.r - b.r)
          .slice(0, 6)
          .map((x) => x.s)
          .join('\n')
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
            {snippets}
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
      className="relative flex h-auto min-h-[100vh] flex-col justify-center pt-24 pb-20 sm:pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
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
        className="relative z-10 flex flex-1 w-full flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10 pb-8"
      >
        {/* Left Column — Text & CTAs */}
        <div className="flex w-full max-w-2xl flex-col items-center lg:items-start text-center lg:text-left flex-1">
          {/* Top tag — system status */}
          <div className="hero-animate hero-animate-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-terminal-green/30 bg-terminal-green/10 px-4 py-1.5 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-terminal-green animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold text-terminal-green tracking-widest uppercase mb-[-1px]">System Online</span>
          </div>

          {/* Main heading with glitch */}
          <div className="hero-animate hero-animate-delay-2 mb-6">
            <h1
              className="glitch-text text-center lg:text-left text-6xl font-black leading-[1.1] tracking-tighter text-white sm:text-7xl md:text-8xl"
              data-text="SAMIHA"
            >
              <span className="relative z-[1] block">SAMIHA</span>
            </h1>
            <h1
              className="glitch-text text-center lg:text-left text-6xl font-black leading-[1.1] tracking-tighter text-white sm:text-7xl md:text-8xl mt-2"
              data-text="SHAHIN"
            >
              <span className="relative z-[1] block">SHAHIN</span>
            </h1>
          </div>

          {/* Bio */}
          <p className="hero-animate hero-animate-delay-3 mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-400 sm:text-xl">
            Waiting for AGI. I live to experiment.
            <br />
            <span className="text-gray-300">Content, games, and tools.</span>
          </p>

          {/* CTA buttons */}
          <div className="hero-animate hero-animate-delay-4 flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="#skills"
              className="group rounded-full border border-neon-pink/30 bg-neon-pink/10 px-8 py-3.5 text-sm font-semibold text-neon-pink
                transition-all duration-400 hover:border-neon-pink/50 hover:bg-neon-pink/20 hover:shadow-[0_0_30px_rgba(255,42,133,0.3)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="mr-2 font-mono opacity-60">$</span>
              explore --skills
            </a>
            <a
              href="#contact"
              className="group rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white
                transition-all duration-400 hover:border-white/20 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="mr-2 font-mono opacity-60">$</span>
              contact --init
            </a>
          </div>
        </div>

        {/* Right Column — Portrait */}
        <div className="hero-animate-from-right flex-1 w-full max-w-[28rem] lg:max-w-[32rem] mx-auto lg:mx-0 mt-4 sm:mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <div className="hero-portrait-glow z-20 w-full">
            <img
              src="/image_8.png"
              alt="Samiha Shahin"
              className="hero-portrait-img w-full object-cover rounded-[1.25rem]"
              style={{aspectRatio: '3/4'}}
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
