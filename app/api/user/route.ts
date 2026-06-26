// app/api/user/route.ts
import { getUser } from "@/lib/tb"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get("username")

  return Response.json(getUser(username || ""))
}
