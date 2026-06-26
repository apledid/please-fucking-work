// app/api/user/route.ts
let store: Record<string, any> = {}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get("username")

  return Response.json(store[username || ""] || null)
}
