import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "./Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
    </div>
  );
}

export default Home;