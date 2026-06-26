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
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left - FLARED */}
        <div className="w-1/2 min-h-screen bg-[#9D4141] flex flex-col items-center justify-center relative">
          <div
            className={`text-center transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h1 className="text-white text-7xl md:text-8xl font-black tracking-[0.15em] mb-4">
              FLARED
            </h1>
            <p className="text-white/70 text-lg tracking-wide mb-8">
              Your Personal Profile Platform
            </p>
            <button
              onClick={scrollToAuth}
              className="bg-white text-[#9D4141] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Scroll Arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right - White */}
        <div className="w-1/2 min-h-screen bg-white flex items-center justify-center">
          <div className="text-center px-12 max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-gray-800 text-2xl font-bold mb-3">Create Your Space</h2>
            <p className="text-gray-500 leading-relaxed">
              Build a personalized profile that showcases your unique identity.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth-section" className="min-h-screen flex">
        {/* Left - White */}
        <div className="w-1/2 min-h-screen bg-white flex items-center justify-center">
          <div className="text-center px-12 max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-gray-800 text-2xl font-bold mb-3">Secure & Private</h2>
            <p className="text-gray-500 leading-relaxed">
              Your data stays yours. Join others who trust FLARED.
            </p>
          </div>
        </div>

        {/* Right - Auth */}
        <div className="w-1/2 min-h-screen bg-[#9D4141] flex items-center justify-center">
          <div className="w-full max-w-sm px-6">
            <h2 className="text-white text-3xl font-bold text-center mb-2">Welcome</h2>
            <p className="text-white/70 text-center mb-8">Choose your path</p>

            <a
              href="/signup"
              className="block w-full py-3 bg-white text-[#9D4141] font-semibold text-center rounded-lg mb-3 hover:bg-gray-100 transition-colors"
            >
              Create Account
            </a>

            <a
              href="/login"
              className="block w-full py-3 border-2 border-white text-white font-semibold text-center rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#9D4141] py-6">
        <p className="text-white/60 text-center text-sm">FLARED - Your personal profile, elevated.</p>
      </footer>
    </main>
  )
}
