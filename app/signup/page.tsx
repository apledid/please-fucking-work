"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = () => {
    if (!username) return
    // remember who is logged in so Customize knows whose profile to save
    localStorage.setItem("user", username)

    router.push(`/${username}`)
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="w-full max-w-md px-6">
        <div className="bg-[#9D4141] rounded-2xl p-8 shadow-lg">
          <h1 className="text-white text-3xl font-bold text-center mb-2">Sign Up</h1>
          <p className="text-white/70 text-center mb-8">Create your account</p>

          <input
            placeholder="email"
            className="block w-full p-3 rounded-full text-black mb-3"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="username"
            className="block w-full p-3 rounded-full text-black mb-3"
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="block w-full p-3 rounded-full text-black mb-3"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="block w-full py-3 bg-white text-[#9D4141] font-semibold text-center rounded-full hover:bg-gray-100 transition-colors"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  )
}
