"use client"

import { useState } from "react"

export default function UserPage({ params }: { params: { user: string } }) {
  const [desc, setDesc] = useState("No description yet")

  const save = () => {
    alert("Saved (DB will come next step)")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">{params.user}</h1>

      <textarea
        className="text-black p-2 w-80 h-32"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />

      <button onClick={save} className="px-4 py-2 bg-white text-black">
        Save Description
      </button>
    </div>
  )
}
