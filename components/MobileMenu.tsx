"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ open, setOpen, navLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dimmed background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
            onClick={() => setOpen(false)}
          />

          {/* Sliding panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 w-[82%] h-full z-50 p-6 flex flex-col justify-between
                       bg-[#f9fafc]/80 backdrop-blur-3xl rounded-l-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)]
                       border-l border-white/40"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-gray-900 font-dmSerif font-semibold text-lg tracking-tight">Cinex<span className="text-blue-600">.</span></h2>
              <button
                aria-label="Close Menu"
                onClick={() => setOpen(false)}
                className="p-2 bg-white rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.08),-2px_-2px_5px_rgba(255,255,255,0.9)] hover:scale-105 transition"
              >
                <X className="h-5 w-5 text-gray-800" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center space-y-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-gray-900 text-lg font-medium tracking-wide 
                               px-5 py-3 rounded-2xl bg-[#f9fafc] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]
                               hover:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_3px_rgba(255,255,255,0.7)]
                               transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-6">
              <Button
                asChild
                className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl text-lg py-6 
                           shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:scale-[1.02] transition-all"
              >
                <Link href="#shop" onClick={() => setOpen(false)}>
                  Buy Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
