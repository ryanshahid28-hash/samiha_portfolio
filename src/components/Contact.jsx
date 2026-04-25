import { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, formData)
      setStatus('success')
      setStatusMessage(data.message || 'Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setStatusMessage(
        err.response?.data?.error || 'Something went wrong. Please try again.'
      )
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative flex flex-col py-16 sm:py-24 w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,42,133,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
            <span className="text-xs font-mono text-neon-pink uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-purple">Me</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            {'>'} ssh connect@samiha.dev<span className="terminal-cursor" />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-dark-card border border-white/5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-neon-pink font-mono">{'>'}</span> Let&apos;s Connect
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I&apos;m always excited to collaborate on new projects,
                discuss tech ideas, or just have a chat about the future of AI.
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-mono">samihashahin23@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-electric-purple/10 border border-electric-purple/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-electric-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-mono">India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-dark-card border border-white/5 backdrop-blur-xl space-y-5"
          >
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                  placeholder:text-gray-600 focus:outline-none focus:border-neon-pink/50 focus:shadow-[0_0_15px_rgba(255,42,133,0.15)]
                  transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                  placeholder:text-gray-600 focus:outline-none focus:border-neon-pink/50 focus:shadow-[0_0_15px_rgba(255,42,133,0.15)]
                  transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                  placeholder:text-gray-600 focus:outline-none focus:border-neon-pink/50 focus:shadow-[0_0_15px_rgba(255,42,133,0.15)]
                  transition-all duration-300 resize-none"
                placeholder="Write your message..."
              />
            </div>
            <button
              id="contact-submit"
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3 rounded-xl bg-gradient-to-r from-neon-pink to-electric-purple text-white font-semibold text-sm
                hover:shadow-[0_0_30px_rgba(255,42,133,0.4)] hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300 ${status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <><span className="font-mono mr-1">{'>'}</span> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center font-mono">
                ✓ {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-mono">
                ✗ {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

