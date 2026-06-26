"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const scrollToAuth = () => {
    document.getElementById("auth-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-[200vh]">
      {/* Continuous Split Background */}
      <div className="fixed inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-[#9D4141]" />
        <div className="w-1/2 h-full bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center">
          <div
            className={`text-center transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h1 className="text-white text-7xl md:text-8xl font-black tracking-[0.15em] drop-shadow-lg">
              FLARED
            </h1>
            <p className="text-white/70 text-lg tracking-wide mt-4 mb-8 drop-shadow">
              Your Personal Profile Platform
            </p>
            <button
              onClick={scrollToAuth}
              className="bg-white text-[#9D4141] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Scroll Arrow */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Auth Section */}
        <section id="auth-section" className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-md px-6 bg-white/10 backdrop-blur-sm rounded-2xl py-10 shadow-xl border border-white/20">
            <h2 className="text-white text-3xl font-bold text-center mb-2">Welcome</h2>
            <p className="text-white/70 text-center mb-8">Create an account or sign in</p>

            <a
              href="/signup"
              className="block w-full py-3 bg-white text-[#9D4141] font-semibold text-center rounded-full mb-3 hover:bg-gray-100 transition-colors"
            >
              Create Account
            </a>

            <a
              href="/login"
              className="block w-full py-3 bg-transparent border-2 border-white text-white font-semibold text-center rounded-full hover:bg-white/10 transition-colors"
            >
              Sign In
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center">
          <p className="text-white/60 text-sm">FLARED - Your personal profile, elevated.</p>
        </footer>
      </div>
    </main>
  )
}
