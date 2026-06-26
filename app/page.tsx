export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 bg-[#9D4141] flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold tracking-widest">
            FLARED
          </h1>
        </div>

        <div className="w-1/2 bg-white flex flex-col items-center justify-center gap-4">
          <a className="px-6 py-3 bg-black text-white rounded" href="/signup">
            Create Account
          </a>
          <a className="px-6 py-3 border border-black rounded" href="/login">
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
