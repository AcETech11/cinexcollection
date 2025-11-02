"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-gray-300 py-16 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-12"
      >
        {/* Brand Section */}
        <div>
          <h2 className="text-white font-semibold text-2xl mb-4 tracking-wide font-dmSerif">
            Cinex Collection
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Experience the power of nature’s touch. Cinex Miracle Hair Growth Oil
            helps you restore confidence, beauty, and unstoppable growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium text-lg mb-4 font-dmSerif">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#benefits" className="hover:text-amber-500 transition">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="/#shop" className="hover:text-amber-500 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-amber-500 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white font-medium text-lg mb-4 font-dmSerif">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-500" />
              <a
                href="https://wa.me/2348106535064"
                target="_blank"
                className="hover:text-amber-500 transition"
              >
                +234 810 653 5064
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-500" />
              <a
                href="mailto:cinexcollection@gmail.com"
                className="hover:text-amber-500 transition"
              >
                cinexcollection@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/cinzecollection"
                target="_blank"
                className="hover:text-amber-500 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/cinzecollection"
                target="_blank"
                className="hover:text-amber-500 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-gray-700 mt-12 pt-8 text-center text-sm"
      >
        <p className="text-gray-400">
          © {new Date().getFullYear()} Cinze Collection. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2">
          Developed by{" "}
          <a
            href="https://fastrivestudio.vercel.app"
            target="_blank"
            className="text-amber-500 hover:text-amber-400 transition font-medium"
          >
            Fastrive Studio
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
