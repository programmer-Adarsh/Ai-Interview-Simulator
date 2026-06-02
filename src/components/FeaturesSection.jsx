import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  return (
    <section
      id="features"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <FeatureCard
          title="AI Generated Questions"
          description="Dynamic interview questions tailored to your role and difficulty level."
        />

        <FeatureCard
          title="Instant Feedback"
          description="Receive detailed evaluation, strengths, weaknesses and suggestions."
        />

        <FeatureCard
          title="Performance Analytics"
          description="Track progress across interviews and identify improvement areas."
        />

      </div>
    </section>
  );
}

export default FeaturesSection;