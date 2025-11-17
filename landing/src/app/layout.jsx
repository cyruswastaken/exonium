import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth-provider";
import Nav from "@/components/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exonium",
  icons: {
    icon: "/logo-assets/logo-light.svg",
    shortcut: "/logo-assets/logo-light.svg",
    apple: "/logo-assets/logo-light.svg",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000212] text-[#f7f8f8]`}>
        <AuthProvider session={null}>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
