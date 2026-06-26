// app/api/auth/route.ts
export async function POST(req: Request) {
  const body = await req.json()

  return Response.json({
    message: "auth endpoint",
    user: body
  })
}
