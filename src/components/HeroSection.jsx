import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="text-center py-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold"
      >
        AI-Powered Interview Practice
      </motion.h1>

      <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
        Practice technical interviews, get AI feedback,
        improve your confidence, and track progress.
      </p>

      <Link
        to="/setup"
        className="inline-block mt-10 bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold"
      >
        Start Interview
      </Link>

    </section>
  );
}

export default HeroSection;