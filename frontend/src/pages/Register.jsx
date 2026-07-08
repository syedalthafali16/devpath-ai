import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
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
      await api.post("/users/register/", formData);

      alert("Account Created Successfully!");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.log(error.response?.data);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-[170px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-10 backdrop-blur-3xl">
        <h1 className="text-center text-4xl font-black text-white">
          Create Account
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Start building your developer career today.
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
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-amber-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;