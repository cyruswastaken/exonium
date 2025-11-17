"use client";

import Github from "@/lib/svgs/github";
import Slack from "@/lib/svgs/slack";
import Twitter from "@/lib/svgs/twitter";
import Youtube from "@/lib/svgs/youtube";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MobileMenu = ({ show }) => {
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

    if (show) {
      checkAuthStatus();
    }
  }, [show]);

  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setSession(null);
      window.location.reload();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };
  return (
    <motion.div
      initial={{
        y: "-100%",
      }}
      animate={
  show ? { y: "0%" } : { y: "-100%" }
      }
      transition={{
  duration: 0.7, type: "tween",
      }}
      className="container-lg fixed top-0 z-40 flex min-h-screen w-full flex-col bg-[#000212] pt-20 text-lg lg:hidden"
    >
      <div className="grid grid-cols-2">
        <ul className="space-y-3">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
        <ul className="space-y-3">
          <li className="cursor-pointer">Contact</li>
          {!loading && session ? (
            <>
              <li className="cursor-pointer">
                <a href="http://localhost:5173">Dashboard</a>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="border-2 border-red-400 bg-red-900/30 rounded-full px-4 py-2 font-medium text-white hover:bg-red-900/50 transition duration-300"
                >
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="cursor-pointer">
                <a href="http://localhost:5173">Login</a>
              </li>
              <li>
                <a href="http://localhost:5173" className="border-2 border-blue-400 bg-[#003366] rounded-full px-4 py-2 font-medium text-white hover:bg-transparent transition duration-300 inline-block">
                  Sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex flex-1 items-end gap-10 pb-5">
        <Twitter />
        <Github />
        <Slack />
        <Youtube />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
