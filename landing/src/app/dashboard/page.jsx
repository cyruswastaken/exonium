"use client";

import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    // Immediately redirect to client app
    window.location.href = "http://localhost:5174";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting to dashboard...</p>
      </div>
    </div>
  );
}