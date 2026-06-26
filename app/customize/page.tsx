"use client"

import { useState } from "react"

export default function CustomizePage() {
  const [description, setDescription] = useState("")

  function save() {
    const confirmSave = window.confirm(
      "Are you sure you want to save this?"
    )

    if (!confirmSave) return

    alert("Saved!")
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">
        Customize
      </h1>

      <textarea
        className="text-black p-3 w-80 h-40"
        placeholder="Your description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={save}
        className="bg-white text-black px-6 py-3 rounded"
      >
        Save
      </button>
    </main>
  )
}
