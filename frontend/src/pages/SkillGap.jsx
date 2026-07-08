import { useState } from "react";
import api from "../services/api";

function SkillGap() {
  const [currentSkills, setCurrentSkills] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeSkills = async () => {
    if (!currentSkills || !targetRole) {
      alert("Fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("access");

      const response = await api.post(
        "/mentor/skill-gap/",
        {
          current_skills: currentSkills,
          target_role: targetRole,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(response.data.analysis);
    } catch (error) {
      console.log(error);
      alert("Failed to analyze.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-black text-amber-400">
          AI Skill Gap Analyzer
        </h1>

        <p className="mt-2 text-zinc-400">
          Find which skills you're missing for your dream job.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6">

          <input
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="Target Role (Frontend Developer)"
            className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <textarea
            rows="6"
            value={currentSkills}
            onChange={(e) => setCurrentSkills(e.target.value)}
            placeholder="Current Skills (HTML, CSS, JavaScript...)"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <button
            onClick={analyzeSkills}
            className="mt-5 rounded-xl bg-amber-400 px-8 py-3 font-bold text-black"
          >
            {loading ? "Analyzing..." : "Analyze Skills"}
          </button>

        </div>

        {result && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <h2 className="mb-5 text-2xl font-bold text-amber-400">
              Analysis
            </h2>

            <pre className="whitespace-pre-wrap leading-8 font-sans">
              {result}
            </pre>

          </div>
        )}

      </div>
    </div>
  );
}

export default SkillGap;