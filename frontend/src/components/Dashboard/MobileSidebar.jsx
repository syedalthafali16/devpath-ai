import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Route,
  Brain,
  FolderKanban,
  User,
  LogOut,
  X,
} from "lucide-react";

function MobileSidebar({ close }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 lg:hidden">

      <div className="h-full w-72 bg-zinc-900 border-r border-white/10 p-6">

        <div className="mb-10 flex items-center justify-between">

          <h1 className="text-2xl font-black text-amber-400">
            DevPath AI
          </h1>

          <button onClick={close}>
            <X />
          </button>

        </div>

        <nav className="space-y-3">

          <Item to="/dashboard" text="Dashboard" icon={<LayoutDashboard />} close={close} />
          <Item to="/roadmaps" text="Roadmaps" icon={<Route />} close={close} />
          <Item to="/mentor" text="AI Mentor" icon={<Brain />} close={close} />
          <Item to="/skill-gap" text="Skill Gap" icon={<FolderKanban />} close={close} />
          <Item to="/profile" text="Profile" icon={<User />} close={close} />

        </nav>

        <button
          onClick={logout}
          className="mt-12 flex w-full items-center gap-3 rounded-xl bg-red-500/20 p-3"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

      <div
        className="absolute inset-0 -z-10"
        onClick={close}
      />

    </div>
  );
}

function Item({ to, text, icon, close }) {
  return (
    <NavLink
      to={to}
      onClick={close}
      className={({ isActive }) =>
        `flex items-center gap-4 rounded-xl p-3 ${
          isActive
            ? "bg-amber-400 text-black"
            : "text-white hover:bg-white/10"
        }`
      }
    >
      {icon}
      {text}
    </NavLink>
  );
}

export default MobileSidebar;