"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAuth = () => {
    document.getElementById("auth-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen flex">
        {/* Left side - FLARED */}
        <div className="w-1/2 bg-[#9D4141] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#b84a4a] to-[#8a3535] opacity-50" />
          <div className="relative z-10 text-center">
            <h1
              className={`text-white text-8xl md:text-9xl font-black tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              FLARED
            </h1>
            <p
              className={`text-white/80 text-lg md:text-xl tracking-wide mb-12 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Your Personal Profile Platform
            </p>
            <button
              onClick={scrollToAuth}
              className={`px-10 py-4 bg-white text-[#9D4141] font-bold text-lg rounded-full shadow-2xl hover:scale-105 hover:shadow-white/20 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Get Started
            </button>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right side - decorative */}
        <div className="w-1/2 bg-white flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-50 to-white" />
          <div className="relative z-10 text-center px-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
              <svg className="w-16 h-16 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-gray-800 text-3xl font-bold mb-4">Create Your Space</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Build a personalized profile that showcases your unique identity.
              Connect, share, and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth-section" className="min-h-screen flex">
        {/* Left side - decorative */}
        <div className="w-1/2 bg-white flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white" />
          <div className="relative z-10 text-center px-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
              <svg className="w-16 h-16 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-gray-800 text-3xl font-bold mb-4">Secure & Private</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Your data stays yours. Join thousands who trust FLARED
              for their personal branding needs.
            </p>
          </div>
        </div>

        {/* Right side - Auth options */}
        <div className="w-1/2 bg-[#9D4141] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#b84a4a] to-[#8a3535] opacity-50" />
          <div className="relative z-10 w-full max-w-md px-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
              <h2 className="text-white text-4xl font-bold text-center mb-3">Welcome</h2>
              <p className="text-white/70 text-center mb-10">Choose your path to get started</p>

              <a
                href="/signup"
                className="block w-full py-4 bg-white text-[#9D4141] font-bold text-lg rounded-xl text-center mb-4 hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                Create Account
              </a>

              <a
                href="/login"
                className="block w-full py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl text-center hover:bg-white/10 transition-all duration-300"
              >
                Sign In
              </a>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white/50 text-sm">
                  By continuing, you agree to our Terms & Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Why FLARED?</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            A modern platform designed for the creative individual
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Setup</h3>
              <p className="text-gray-500">Get your profile live in minutes, not hours</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l4.657 4.657m0 0l-4.657 4.657m4.657-4.657L18 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Full Customization</h3>
              <p className="text-gray-500">Express yourself with flexible styling</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9D4141]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#9D4141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Share Anywhere</h3>
              <p className="text-gray-500">One link to share your entire presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#9D4141] py-8">
        <div className="text-center">
          <h3 className="text-white text-2xl font-bold tracking-widest mb-2">FLARED</h3>
          <p className="text-white/60 text-sm">Your personal profile, elevated.</p>
        </div>
      </footer>
    </div>
  )
}
