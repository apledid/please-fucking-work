// lib/tb.ts
// Simple file-backed "database" so data persists and is shared
// across all API routes (no external DB setup needed).
import fs from "fs"
import path from "path"

const DB_FILE = path.join(process.cwd(), "data.json")

type User = {
  description?: string
}

function readAll(): Record<string, User> {
  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8")
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function writeAll(data: Record<string, User>) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2))
}

export function getUser(username: string): User | null {
  if (!username) return null
  const all = readAll()
  return all[username] || null
}

export function setUser(username: string, user: User) {
  const all = readAll()
  all[username] = { ...all[username], ...user }
  writeAll(all)
}
