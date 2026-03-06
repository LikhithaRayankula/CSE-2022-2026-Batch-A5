import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, UserPlus, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import GradientBackground from "@/components/GradientBackground";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) {
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Registration successful! You can now log in.");
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <GradientBackground />
      <div className="glass-card animate-fade-in w-full max-w-md p-8 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <UserPlus className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Join the AI evaluation platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="bg-white/60 backdrop-blur" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/60 backdrop-blur" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/60 pr-10 backdrop-blur"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`bg-white/60 pr-16 backdrop-blur ${passwordsMatch ? "border-green-500 focus-visible:ring-green-500" : ""} ${passwordsMismatch ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                {passwordsMatch && <Check className="h-4 w-4 text-green-500" />}
                {passwordsMismatch && <X className="h-4 w-4 text-red-500" />}
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-muted-foreground hover:text-foreground">
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {passwordsMismatch && <p className="text-xs text-red-500">Passwords do not match</p>}
            {passwordsMatch && <p className="text-xs text-green-500">Passwords match</p>}
          </div>

          <Button type="submit" className="w-full rounded-full text-base font-semibold shadow-lg transition-transform hover:scale-[1.02]" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? "Creating account..." : "Register"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
