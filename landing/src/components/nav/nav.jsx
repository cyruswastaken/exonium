"use client";

import Menu from "@/lib/svgs/menu";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import { useState, useEffect } from "react";
import Close from "@/lib/svgs/close";
import Link from "next/link";

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check authentication with backend API
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/user/current', {
                    credentials: 'include' // Include cookies for session
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

    const handleSignOut = async () => {
        try {
            await fetch('http://localhost:8000/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            setSession(null);
            // Optionally redirect to home or refresh
            window.location.reload();
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return (
        <>
            <nav className="backdrop-blur-md py-3 bg-[hsla(0,0%,100%,.01)] fixed inset-0 border-b border-[hsla(0,0%,100%,.08)] z-50 h-fit">
                <div className="container-lg flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Link href="/" className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo-assets/logo-light.png"
                                alt="Logo Light"
                                width={18}
                                height={18}
                            />
                            <h1 className="font-medium">Exonium</h1>
                        </Link>
                    </div>

                    <ul className="hidden lg:flex items-center gap-8">
                        <li className="text-sm cursor-pointer">
                            <Link href="/features">Features</Link>
                        </li>
                        <li className="text-sm cursor-pointer">
                            <Link href="/company">Company</Link>
                        </li>
                        <li className="text-sm cursor-pointer">
                            <Link href="/pricing">Pricing</Link>
                        </li>
                        <li className="text-sm cursor-pointer">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {!loading && session ? (
                        <div className="flex items-center gap-4">
                            <div className="text-sm hidden lg:block">
                                <a href="http://localhost:5173" className="border-2 border-blue-400 bg-[#003366] rounded-full px-4 font-medium leading-8 h-8 text-white hover:bg-transparent transition duration-700 flex items-center justify-center min-w-[80px] text-sm">
                                    Dashboard
                                </a>
                            </div>
                            <div className="text-sm">
                                <button
                                    onClick={handleSignOut}
                                    className="border-2 border-red-400 bg-red-900/30 rounded-full px-4 font-medium leading-8 h-8 text-white hover:bg-red-900/50 transition duration-700 flex items-center justify-center min-w-[80px] text-sm"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <div className="text-sm cursor-pointer hidden lg:block">
                                <a href="http://localhost:5173" className="hover:underline">Login</a>
                            </div>
                            <div className="text-sm">
                                <a href="http://localhost:5173" className="border-2 border-blue-400 bg-[#003366] rounded-full px-4 font-medium leading-8 h-8 text-white hover:bg-transparent transition duration-700 flex items-center justify-center min-w-[80px] text-sm">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    )}

                    <div
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                        className="lg:hidden cursor-pointer"
                    >
                        {showMobileMenu ? <Close /> : <Menu />}
                    </div>
                </div>
            </nav>
            <MobileMenu show={showMobileMenu} />
        </>
    );
};

export default Nav;
