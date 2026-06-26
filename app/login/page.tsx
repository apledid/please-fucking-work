"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState("")

  const handleLogin = () => {
    router.push(`/${username}`)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 bg-black text-white">
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        placeholder="username"
        className="p-2 text-black"
        onChange={e => setUsername(e.target.value)}
      />

      <button onClick={handleLogin} className="px-4 py-2 bg-white text-black">
        Enter
      </button>
    </div>
  )
}
