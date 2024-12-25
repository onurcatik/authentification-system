import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "../components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500
        text-white
      "
    >
      <div className="relative w-full max-w-md p-6 bg-white/10 rounded-3xl shadow-xl backdrop-blur-lg">
        <h1
          className={cn(
            "text-5xl font-bold leading-tight text-center text-transparent bg-clip-text bg-white",
            font.className
          )}
        >
          Welcome to Auth
        </h1>
        <p className="mt-4 text-center text-gray-200 text-base">
          Seamlessly sign in with our secure authentication service
        </p>
        <div className="mt-6 flex items-center justify-center">
          <LoginButton mode="modal" asChild>
            <Button
              className="
                px-8 py-3 text-lg font-medium transition transform 
                bg-gradient-to-r from-purple-700 to-indigo-600 hover:scale-105
                hover:bg-gradient-to-l rounded-lg shadow-md
              "
            >
              Get Started
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
