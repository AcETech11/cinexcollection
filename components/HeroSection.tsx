"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdfc] to-[#f9fafc] pt-32 pb-20">
      {/* Decorative blur background */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-10 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          {/* Eyebrow */}
          <p className="uppercase tracking-wider text-sm text-blue-600 font-semibold mb-3">
            For Bold & Beautiful Hair
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 font-serif">
            Grow Stronger, Thicker & <span className="text-blue-600">Fuller Hair</span> Naturally
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Experience visible results with our all-natural hair growth oil—crafted to nourish your scalp,
            restore shine, and boost your confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Link href="#shop">Shop Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-800 text-lg px-8 py-6 rounded-full"
            >
              <Link href="#reviews">See Results</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 md:mt-0"
        >
          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 rounded-[2rem] shadow-[8px_8px_24px_rgba(0,0,0,0.1),-8px_-8px_24px_rgba(255,255,255,0.8)]" />
            <Image
              src="/product-hero.jpg" // replace with actual product image
              alt="Ultimate Hair Growth Oil"
              fill
              className="object-cover relative z-10 w-full h-full rounded-[2rem] shadow-[8px_8px_24px_rgba(0,0,0,0.1),-8px_-8px_24px_rgba(255,255,255,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
