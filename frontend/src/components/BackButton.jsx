import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-white hover:text-yellow-400 mb-6 transition"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
}

export default BackButton;