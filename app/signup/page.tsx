"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = () => {
    // temporary fake storage (we will replace with DB later)
    localStorage.setItem("user", username)

    router.push(`/${username}`)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 bg-black text-white">
      <h1 className="text-3xl font-bold">Sign Up</h1>

      <input placeholder="email" className="p-2 text-black" onChange={e => setEmail(e.target.value)} />
      <input placeholder="username" className="p-2 text-black" onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" type="password" className="p-2 text-black" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleSignup} className="px-4 py-2 bg-white text-black">
        Create Account
      </button>
    </div>
  )
}
