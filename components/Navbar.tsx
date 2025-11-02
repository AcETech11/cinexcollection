"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#benefits", label: "Benefits" },
    { href: "#howitworks", label: "How It Works" },
    { href: "#reviews", label: "Reviews" },
    { href: "https://wa.me/2348106535064?text=Hello%20I%27d%20like%20to%20make%20an%20enquiry%20about%20Cinze%20Miracle%20Hair%20Oil.", label: "Contact", target: "_blank", rel: "noopener noreferrer" }, // WhatsApp link", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-dmSerif font-semibold text-xl text-gray-900">
          Cinex<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-inter">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
            <Link href="#shop">Buy Now</Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu open={open} setOpen={setOpen} navLinks={navLinks} />
    </motion.nav>
  );
}
