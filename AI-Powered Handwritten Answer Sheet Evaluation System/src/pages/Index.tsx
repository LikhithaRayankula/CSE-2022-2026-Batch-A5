import { Brain, ScanText, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/GradientBackground";

const features = [
  {
    icon: Brain,
    title: "AI Evaluation",
    description: "Advanced AI models analyze and grade handwritten answers with human-level accuracy.",
  },
  {
    icon: ScanText,
    title: "OCR Processing",
    description: "State-of-the-art optical character recognition converts handwriting to digital text.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get detailed evaluation reports and scores within seconds of submission.",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      {/* Hero */}
      <main className="flex flex-col items-center px-4 pt-24 pb-16 text-center sm:pt-32">
        <div className="animate-fade-in max-w-3xl">
          <h1 className="gradient-text mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Handwritten Answer Sheet Evaluation
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Upload handwritten answer sheets and let our AI instantly evaluate, grade, and provide detailed feedback — accurate, fast, and effortless.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 px-8 text-lg font-semibold transition-transform hover:scale-105">
              <Link to="/register">
                Register <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <section className="mt-24 grid w-full max-w-5xl gap-8 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card group flex flex-col items-center p-8 text-center transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AI Answer Sheet Evaluator. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
