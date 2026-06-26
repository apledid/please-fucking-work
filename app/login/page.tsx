"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState("")

  const handleLogin = () => {
    if (!username) return
    // remember who is logged in so Customize knows whose profile to save
    localStorage.setItem("user", username)
    router.push(`/${username}`)
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="w-full max-w-md px-6">
        <div className="bg-[#9D4141] rounded-2xl p-8 shadow-lg">
          <h1 className="text-white text-3xl font-bold text-center mb-2">Sign In</h1>
          <p className="text-white/70 text-center mb-8">Welcome back</p>

          <input
            placeholder="username"
            className="block w-full p-3 rounded-full text-black mb-3"
            onChange={e => setUsername(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="block w-full py-3 bg-white text-[#9D4141] font-semibold text-center rounded-full hover:bg-gray-100 transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    </main>
  )
}
