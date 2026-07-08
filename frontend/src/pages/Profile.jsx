import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import api from "../services/api";
import Sidebar from "../components/Dashboard/Sidebar";
import MobileSidebar from "../components/Dashboard/MobileSidebar";
import Topbar from "../components/Dashboard/Topbar";

function Profile() {
  const [user, setUser] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("/users/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {showSidebar && (
        <MobileSidebar close={() => setShowSidebar(false)} />
      )}

      <div className="lg:ml-72">

        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 lg:hidden">
          <button
            onClick={() => setShowSidebar(true)}
            className="rounded-xl bg-white/10 p-3"
          >
            <Menu size={22} />
          </button>

          <h2 className="text-xl font-bold text-amber-400">
            Profile
          </h2>
        </div>

        <Topbar />

        <main className="p-4 sm:p-6 lg:p-8">

          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">

            {/* Header */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-400 text-4xl font-bold text-black">
                {user.first_name?.charAt(0) ||
                  user.username?.charAt(0)}
              </div>

              <div>
                <h1 className="text-3xl font-black sm:text-4xl">
                  {user.first_name} {user.last_name}
                </h1>

                <p className="mt-2 text-zinc-400">
                  @{user.username}
                </p>
              </div>

            </div>

            {/* Details */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-zinc-400">Email</p>
                <p className="mt-2 break-all text-lg">
                  {user.email}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-zinc-400">Username</p>
                <p className="mt-2 text-lg">
                  {user.username}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-zinc-400">First Name</p>
                <p className="mt-2 text-lg">
                  {user.first_name}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-zinc-400">Last Name</p>
                <p className="mt-2 text-lg">
                  {user.last_name}
                </p>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Profile;