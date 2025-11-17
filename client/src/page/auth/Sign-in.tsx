import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { loginMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";


const SignIn = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState("");

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginMutationFn,
    onSuccess: (data) => {
      const user = data.user;
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      const decodedUrl = returnUrl ? decodeURIComponent(returnUrl) : null;
      navigate(decodedUrl || `/workspace/${user.currentWorkspace}`);
    },
    onError: (error: any) => {
      setError(error?.message || "Invalid email or password");
    },
  });

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    setError("");
    loginUser({ email, password });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-[#070708] flex items-center justify-center px-4"
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <Link to="/" className="w-14 h-14 rounded-full bg-[#181a2a] flex items-center justify-center hover:bg-[#1f2235] transition-colors cursor-pointer">
          <img
            src="/logo-assets/logo-light.png"
            alt="Exonium Logo"
            className="w-10 h-10"
          />
        </Link>

        <h2 className="text-white text-xl font-normal mb-2">
          {showEmailForm ? "Welcome back" : "Log in to your workspace"}
        </h2>

        {!showEmailForm ? (
          <div className="w-full flex flex-col items-center gap-3 mt-2 mb-6">
            <button
              onClick={() => window.location.href = 'http://localhost:8000/api/auth/google'}
              className="w-[360px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"/>
              </svg>
              Continue with Google
            </button>
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-[360px] max-w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 font-medium border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
            >
              Continue with email
            </button>
          </div>
        ) : (
          <form onSubmit={handleEmailLogin} className="w-full flex flex-col items-center gap-4 mt-2 mb-6">
            {error && (
              <div className="w-full max-w-[360px] text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <div className="w-full max-w-[360px]">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <div className="w-full max-w-[360px]">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-[360px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Signing in..." : "Log in"}
            </button>
            <button
              type="button"
              onClick={() => setShowEmailForm(false)}
              className="text-[#b4bcd0] text-sm hover:text-white transition-colors cursor-pointer"
            >
              ← Back to login options
            </button>
          </form>
        )}

        <p className="text-xs text-[#b4bcd0] text-center max-w-xs mb-4">
          By logging in, you agree to our <a href="#" className="font-semibold text-white underline">Terms of Service</a> and <a href="#" className="font-semibold text-white underline">Data Processing Agreement</a>.
        </p>
        <p className="text-xs text-[#b4bcd0] text-center">
          Don't have an account?{' '}
          <Link to="/sign-up" className="font-semibold text-white underline">Sign up</Link>
        </p>
      </div>
    </motion.main>
  );
};

export default SignIn;