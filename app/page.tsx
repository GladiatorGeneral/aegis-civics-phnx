
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="bg-black/60 rounded-2xl shadow-xl p-10 flex flex-col gap-8 items-center w-full max-w-md">
        <h1 className="text-4xl font-bold text-cyan-300 mb-4 text-center">Welcome to USAMind</h1>
        <div className="flex flex-col gap-6 w-full">
          <Link href="/dashboard" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white text-xl font-semibold shadow transition">Current Numbers</button>
          </Link>
          <Link href="/illumio" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xl font-semibold shadow transition">Project Illumio</button>
          </Link>
          <Link href="/future-numbers" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-xl font-semibold shadow transition">Illumio Numbers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
