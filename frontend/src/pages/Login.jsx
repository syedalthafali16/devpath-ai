import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login/", formData);

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-[160px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-10 backdrop-blur-3xl">
        <h1 className="text-center text-4xl font-black text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Login to continue your DevPath journey.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black transition hover:bg-orange-400"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-amber-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;