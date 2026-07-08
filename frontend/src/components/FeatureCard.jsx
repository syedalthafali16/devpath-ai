function FeatureCard({ title, description }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-3xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-amber-400/30
      hover:shadow-[0_20px_80px_rgba(251,191,36,.15)]
      "
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl transition group-hover:bg-orange-400/20"></div>

      <div className="relative">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-2xl">
          ✨
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="leading-8 text-zinc-400">
          {description}
        </p>

      </div>
    </div>
  );
}

export default FeatureCard;