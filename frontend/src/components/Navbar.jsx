import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav
        className={`rounded-3xl border backdrop-blur-3xl transition-all duration-500 ${
          scrolled
            ? "bg-white/[0.08] border-white/10"
            : "bg-white/[0.03] border-white/5"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">

          <Link
            to="/"
            className="text-2xl font-bold text-amber-400"
          >
            DevPath AI
          </Link>

          <div className="hidden md:flex items-center gap-8">

            <a href="#" className="hover:text-amber-400">
              Home
            </a>

            <a href="#features" className="hover:text-amber-400">
              Features
            </a>

            <Link to="/login" className="hover:text-amber-400">
              Login
            </Link>

          </div>

          <div className="hidden md:flex gap-3">

            <Link
              to="/login"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black"
            >
              Get Started
            </Link>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (
          <div className="border-t border-white/10 p-5 md:hidden">

            <div className="flex flex-col gap-4">

              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <a href="#features" onClick={() => setOpen(false)}>
                Features
              </a>

              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-amber-400 px-4 py-3 text-center font-bold text-black"
              >
                Get Started
              </Link>

            </div>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;