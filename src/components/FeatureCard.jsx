function FeatureCard({ title, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all">

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;