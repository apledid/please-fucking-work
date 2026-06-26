"use client"

import { useState, useEffect } from "react"

export default function CustomizePage() {
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")
  const [saving, setSaving] = useState(false)

  // figure out who is logged in, then preload their saved description
  useEffect(() => {
    const u = localStorage.getItem("user") || ""
    setUsername(u)
    if (!u) return

    fetch(`/api/user?username=${encodeURIComponent(u)}`)
      .then(res => res.json())
      .then(data => {
        if (data?.description) setDescription(data.description)
      })
      .catch(() => {})
  }, [])

  async function save() {
    if (!username) {
      alert("No user found. Please sign in first.")
      return
    }

    const confirmSave = window.confirm("Are you sure you want to save this?")
    if (!confirmSave) return

    setSaving(true)
    try {
      const res = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, description }),
      })

      if (!res.ok) throw new Error("save failed")
      alert("Saved!")
    } catch {
      alert("Something went wrong while saving.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Customize</h1>

      <textarea
        className="text-black p-3 w-80 h-40 rounded"
        placeholder="Your description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={save}
        disabled={saving}
        className="bg-white text-black px-6 py-3 rounded disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </main>
  )
}
