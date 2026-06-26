// app/api/update/route.ts
let store: Record<string, any> = {}

export async function POST(req: Request) {
  const { username, description } = await req.json()

  store[username] = { description }

  return Response.json({ success: true })
}
