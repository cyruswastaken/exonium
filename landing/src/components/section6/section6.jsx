"use client";

import Window from "@/lib/svgs/window";
import Image from "next/image";
import { useState, useEffect } from "react";

const Section6 = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication with backend API
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user/current', {
          credentials: 'include'
        });
        if (response.ok) {
          const user = await response.json();
          setSession(user);
        } else {
          setSession(null);
        }
      } catch (error) {
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);
  return (
    <div className="container-lg -mt-40 flex flex-col items-center gap-8 pb-10">
      <Image
        src="/logo-assets/linear-app-icon.png"
        alt="logo"
        width={100}
        height={100}
      />
      <h1
        className="my-0.5 text-balance pb-0.5 text-center text-[40px] font-medium leading-[1] -tracking-[0.01em]  [-webkit-text-fill-color:transparent] [color:unset] lg:text-[40px] lg:tracking-tight"
        style={{
          background:
            "radial-gradient(40% 70% at 50% 0%, rgba(255, 255, 255, 0.6), rgb(255, 255, 255)) text",
        }}
      >
        Built for the future.
        <br />
        Available today.
      </h1>
      <div className="flex items-center justify-center gap-5">
        {!loading && (
          session ? (
            <a href="http://localhost:5173" className="border-2 border-green-400 bg-green-900/30 flex h-12 items-center gap-2 rounded-full px-4 font-medium leading-[48px] transition duration-700 hover:bg-green-900/50 lg:flex text-white">
              Go to Dashboard
            </a>
          ) : (
            <a href="http://localhost:5173" className="border-2 border-blue-400 bg-[#003366] flex h-12 items-center gap-2 rounded-full px-4 font-medium leading-[48px] transition duration-700 hover:bg-transparent lg:flex text-white">
              Sign up for free
            </a>
          )
        )}
        <button className="border-2 border-blue-400 hidden h-12 items-center gap-2 rounded-full bg-[hsla(0,0%,100%,.07)] px-4 font-medium leading-[48px] transition duration-700 hover:bg-transparent lg:flex">
          <Window /> Download
        </button>
      </div>
    </div>
  );
};

export default Section6;
