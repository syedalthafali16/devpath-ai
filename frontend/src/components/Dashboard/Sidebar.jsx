import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Route,
  Brain,
  FolderKanban,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  return (
    <aside className="fixed left-4 top-4 bottom-4 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-3xl lg:block">
      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <h1 className="mb-10 hidden lg:block text-2xl font-black text-amber-400">
            DevPath AI
          </h1>

          <nav className="space-y-2">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              to="/dashboard"
            />

            <SidebarItem
              icon={<Route size={20} />}
              text="Roadmaps"
              to="/roadmaps"
            />

            <SidebarItem
              icon={<Brain size={20} />}
              text="AI Mentor"
              to="/mentor"
            />

            <SidebarItem
              icon={<FolderKanban size={20} />}
              text="Skill Gap"
              to="/skill-gap"
            />

            <SidebarItem
              icon={<User size={20} />}
              text="Profile"
              to="/profile"
            />
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-zinc-300 hover:bg-red-500/20 transition"
        >
          <LogOut size={20} />
          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition ${
          isActive
            ? "bg-amber-400 text-black"
            : "text-zinc-300 hover:bg-white/10"
        }`
      }
    >
      {icon}
      <span className="hidden lg:block">{text}</span>
    </NavLink>
  );
}

export default Sidebar;