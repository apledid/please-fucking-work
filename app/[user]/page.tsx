"use client"

import { useState, useEffect } from "react"

export default function UserPage({ params }: { params: { user: string } }) {
  const [desc, setDesc] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(`/api/user?username=${encodeURIComponent(params.user)}`)
      .then(res => res.json())
      .then(data => {
        if (data?.description) setDesc(data.description)
      })
      .catch(() => {})
      .finally(() => setLoaded(true))
  }, [params.user])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-5xl font-bold">{params.user}</h1>

      <p className="max-w-xl text-center text-white/80 whitespace-pre-wrap">
        {loaded ? (desc || "No description yet") : ""}
      </p>
    </div>
  )
}
