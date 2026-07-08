import { useEffect, useState } from "react";
import api from "../services/api";

function Roadmaps() {
  const [role, setRole] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("access");

  const loadRoadmaps = async () => {
    try {
      const response = await api.get("/roadmaps/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistory(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadRoadmaps();
  }, []);

  const generateRoadmap = async () => {
    if (!role.trim()) {
      alert("Enter a role");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/mentor/roadmap/",
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRoadmap(response.data.roadmap);

      loadRoadmaps();
    } catch (err) {
      console.log(err);
      alert("Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-black text-amber-400">
          AI Roadmap Generator
        </h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-3xl">

          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Frontend Developer"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <button
            onClick={generateRoadmap}
            className="mt-5 rounded-xl bg-amber-400 px-8 py-3 font-bold text-black"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

        </div>

        {roadmap && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-3xl">

            <h2 className="mb-5 text-2xl font-bold text-amber-400">
              Latest Roadmap
            </h2>

            <pre className="whitespace-pre-wrap leading-8">
              {roadmap}
            </pre>

          </div>
        )}

        <div className="mt-10">

          <h2 className="mb-6 text-2xl font-bold">
            Previous Roadmaps
          </h2>

          <div className="space-y-4">

            {history.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <h3 className="text-xl font-bold text-amber-400">
                  {item.role}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Roadmaps;