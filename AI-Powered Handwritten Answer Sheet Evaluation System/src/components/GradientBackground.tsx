const GradientBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,80%,95%)] via-[hsl(230,70%,93%)] to-[hsl(280,70%,94%)]" />
    <div className="animate-blob animate-float absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[hsl(262,80%,75%/0.3)] blur-3xl" />
    <div className="animate-blob-delay animate-float-delay absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[hsl(230,70%,70%/0.25)] blur-3xl" />
    <div className="animate-blob animate-float-delay absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[hsl(280,70%,75%/0.3)] blur-3xl" />
  </div>
);

export default GradientBackground;
