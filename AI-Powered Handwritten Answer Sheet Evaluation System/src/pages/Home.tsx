import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
  CheckCircle,
  Brain,
  ScanText,
  Zap,
  Clock,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import GradientBackground from "@/components/GradientBackground";

const aboutFeatures = [
  {
    icon: ScanText,
    title: "OCR Text Extraction",
    description:
      "Extracts handwritten text from answer sheets using advanced optical character recognition.",
  },
  {
    icon: Brain,
    title: "NLP Answer Comparison",
    description:
      "Compares extracted answers with model answers using natural language processing.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Helps teachers evaluate answer sheets faster, reducing manual effort significantly.",
  },
  {
    icon: Zap,
    title: "Unbiased Evaluation",
    description:
      "AI-driven grading removes human bias for fair and consistent scoring.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
    setUploaded(false);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      toast.success("Answer sheet uploaded & evaluated successfully!");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <h2 className="gradient-text text-lg font-bold sm:text-xl">
            AI Answer Sheet Evaluator
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary/30 font-medium"
            onClick={() => navigate("/")}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Upload Section */}
        <section className="animate-fade-in mb-16">
          <div className="glass-card mx-auto max-w-xl p-8 text-center sm:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Upload className="h-7 w-7" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Upload Handwritten Answer Sheet
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Select an image or PDF of a handwritten answer sheet for AI
              evaluation.
            </p>

            <label
              htmlFor="file-upload"
              className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-10 transition-colors hover:border-primary/60 hover:bg-primary/10"
            >
              <FileText className="mb-3 h-10 w-10 text-primary/60 transition-colors group-hover:text-primary" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                {selectedFile
                  ? selectedFile.name
                  : "Click to choose a file (image / PDF)"}
              </span>
              <input
                id="file-upload"
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {uploaded && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary">
                <CheckCircle className="h-4 w-4" />
                Evaluation complete — results ready!
              </div>
            )}

            <Button
              className="mt-6 w-full rounded-full text-base font-semibold shadow-lg transition-transform hover:scale-[1.02]"
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Evaluating…" : "Upload & Evaluate"}
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="animate-fade-in">
          <h2 className="gradient-text mb-10 text-center text-3xl font-extrabold">
            About This System
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((f) => (
              <div
                key={f.title}
                className="glass-card group flex items-start gap-5 p-6 transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AI Answer Sheet Evaluator. All rights
        reserved.
      </footer>
    </div>
  );
};

export default Home;
