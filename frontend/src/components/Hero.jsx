import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">

      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-3xl">

          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>

          <span className="text-xs text-zinc-300 sm:text-sm">
            AI Powered Career Platform
          </span>

        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-8xl">

          Build Your

          <br />

          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-200 bg-clip-text text-transparent">
            Developer Career
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl px-2 text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">

          DevPath AI helps developers generate personalized learning
          roadmaps, discover portfolio projects, analyze skill gaps and
          receive AI-powered mentoring.

        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            to="/register"
            className="rounded-full bg-amber-400 px-8 py-4 text-center text-lg font-semibold text-black transition hover:bg-orange-400"
          >
            Start Building
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-lg transition hover:bg-white/10"
          >
            Login
          </Link>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-amber-400">50+</h2>
            <p className="mt-2 text-zinc-400">Career Paths</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-amber-400">100+</h2>
            <p className="mt-2 text-zinc-400">Project Ideas</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-amber-400">AI</h2>
            <p className="mt-2 text-zinc-400">Personal Mentor</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;