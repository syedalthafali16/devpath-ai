function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row">

        <div>

          <h2 className="text-3xl font-black text-amber-400">
            DevPath AI
          </h2>

          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            Build your developer career with AI-powered roadmaps,
            project mentoring, interview preparation and personalized
            learning guidance.
          </p>

        </div>

        <div className="flex gap-8 text-zinc-400">

          <a href="#" className="transition hover:text-amber-400">
            Home
          </a>

          <a href="#" className="transition hover:text-amber-400">
            Features
          </a>

          <a href="#" className="transition hover:text-amber-400">
            Contact
          </a>

        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        © 2026 DevPath AI • Designed & Developed by Syed Altaf
      </div>

    </footer>
  );
}

export default Footer;