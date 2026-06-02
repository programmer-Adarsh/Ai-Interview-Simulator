import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Interview
      </h1>

      <Link
        to="/setup"
        className="bg-cyan-500 px-5 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400"
      >
        Start Interview
      </Link>
    </nav>
  );
}

export default Navbar;