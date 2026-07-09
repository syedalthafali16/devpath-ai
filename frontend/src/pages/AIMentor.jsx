import { useState } from "react";
import api from "../services/api";
import BackButton from "../components/BackButton";

function AIMentor() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askMentor = async () => {
    if (!message.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("access");

      const response = await api.post(
        "/mentor/chat/",
        {
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReply(response.data.reply);
    } catch (error) {
      console.log(error);
      alert("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="mx-auto max-w-5xl">

      <BackButton />

        <h1 className="text-4xl font-black text-amber-400">
          AI Mentor
        </h1>

        <p className="mt-2 text-zinc-400">
          Ask anything about programming, careers or software development.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6">

          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: Explain React Hooks with examples..."
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <button
            onClick={askMentor}
            className="mt-5 rounded-xl bg-amber-400 px-8 py-3 font-bold text-black"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

        {reply && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <h2 className="mb-5 text-2xl font-bold text-amber-400">
              AI Response
            </h2>

            <pre className="whitespace-pre-wrap leading-8 font-sans">
              {reply}
            </pre>

          </div>
        )}

      </div>
    </div>
  );
}

export default AIMentor;