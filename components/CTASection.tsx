"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-amber-50 py-24 px-6">
      {/* Subtle gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 via-white to-transparent opacity-70" />

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 font-dmSerif"
        >
          Buy One, Get One Free — Because Your Hair Deserves Double the Love 💛
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 mb-10 leading-relaxed"
        >
          Experience fuller, healthier hair with Cinex Miracle Hair Growth Oil.
          For a limited time, when you buy one bottle, you’ll get another one completely free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full shadow-lg transition-all"
          >
            <Link href="#shop">Claim Your Offer Now</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm text-gray-500 mt-8"
        >
          Limited-time offer. While stocks last. Ships nationwide ✨
        </motion.p>
      </div>
    </section>
  );
}
