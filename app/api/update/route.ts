// app/api/update/route.ts
import { setUser } from "@/lib/tb"

export async function POST(req: Request) {
  const { username, description } = await req.json()

  if (!username) {
    return Response.json({ error: "username required" }, { status: 400 })
  }

  setUser(username, { description })

  return Response.json({ success: true })
}
