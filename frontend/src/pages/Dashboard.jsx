import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import MobileSidebar from "../components/Dashboard/MobileSidebar";
import Topbar from "../components/Dashboard/Topbar";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const [stats, setStats] = useState({
    username: "",
    roadmaps: 0,
    projects: 0,
    skills: "Learning",
    ai_sessions: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("/users/dashboard/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {showSidebar && (
        <MobileSidebar close={() => setShowSidebar(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden lg:ml-72">

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 pt-6 lg:hidden">
          <button
            onClick={() => setShowSidebar(true)}
            className="rounded-xl bg-white/10 p-3"
          >
            <Menu size={22} />
          </button>

          <h2 className="text-xl font-bold text-amber-400">
            DevPath AI
          </h2>
        </div>

        <Topbar />

        <main className="p-4 sm:p-6 lg:p-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-3xl">

            <h1 className="text-3xl font-black sm:text-4xl">
              Welcome Back, {stats.username} 👋
            </h1>

            <p className="mt-3 text-zinc-400">
              Continue building your developer career with AI.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-zinc-400">Roadmaps</h3>
              <p className="mt-3 text-4xl font-bold text-amber-400">
                {stats.roadmaps}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-zinc-400">Projects</h3>
              <p className="mt-3 text-4xl font-bold text-amber-400">
                {stats.projects}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-zinc-400">Skills</h3>
              <p className="mt-3 text-2xl font-bold text-amber-400">
                {stats.skills}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-zinc-400">AI Sessions</h3>
              <p className="mt-3 text-4xl font-bold text-amber-400">
                {stats.ai_sessions}
              </p>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;