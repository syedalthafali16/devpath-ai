import FeatureCard from "../components/FeatureCard";

function Features() {
  const features = [
    {
      title: "Career Roadmaps",
      description:
        "Generate personalized AI-powered learning roadmaps tailored to your goals.",
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Identify the missing skills required to reach your dream developer role.",
    },
    {
      title: "Project Recommendations",
      description:
        "Receive portfolio-worthy project ideas based on your current skills.",
    },
    {
      title: "AI Project Mentor",
      description:
        "Get architecture, database design, API suggestions and implementation guidance.",
    },
    {
      title: "Interview Preparation",
      description:
        "Practice technical interviews with AI-generated questions and answers.",
    },
    {
      title: "Progress Tracking",
      description:
        "Track your learning journey and monitor your career growth over time.",
    },
  ];

  return (
    <section
      id="features"
      className="relative max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-20">
        <span className="inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm text-amber-400 backdrop-blur-xl">
          FEATURES
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
          Everything You Need
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          DevPath AI combines career planning, AI mentoring, portfolio
          guidance, interview preparation and project recommendations into one
          modern platform.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;