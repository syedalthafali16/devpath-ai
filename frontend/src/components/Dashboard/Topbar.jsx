import { Bell, Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Topbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
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

    fetchUser();
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 py-4 lg:px-8">
      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-3xl">

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
          <Search size={18} className="text-zinc-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        {/* Mobile Title */}
        <h2 className="text-lg font-bold text-amber-400 lg:hidden">
          Dashboard
        </h2>

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-black">
              {user?.username?.charAt(0).toUpperCase()}
            </div>

            <div className="hidden xl:block">
              <h3 className="font-semibold">
                {user
                  ? `${user.first_name} ${user.last_name}`
                  : "Loading..."}
              </h3>

              <p className="text-sm text-zinc-400">
                {user?.email}
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Topbar;