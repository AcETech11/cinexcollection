"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { image: "/testimonial1.jpg" },
  { image: "/testimonial2.jpg" },
  { image: "/testimonial3.jpg" },
  { image: "/testimonial4.jpg" },
];

export default function TestimonialsSection() {
  // Duplicate the testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white"
    >
      {/* Animated texture background */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/golden-texture.png')] bg-cover opacity-10 mix-blend-overlay"
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
        >
          Every Drop Has a Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          Real screenshots from real customers sharing their{" "}
          <span className="font-semibold text-amber-600">
            Cinex Miracle Hair Growth Oil
          </span>{" "}
          success stories.
        </motion.p>

        {/* Infinite scroll slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[250px] md:min-w-[320px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-md border border-amber-100"
              >
                <Image
                  src={item.image}
                  alt={`testimonial-${index}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating quotation marks for subtle luxury touch */}
      <motion.div
        className="absolute -top-10 -left-10 text-9xl text-amber-100 font-serif select-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        “
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 text-9xl text-amber-100 font-serif select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ”
      </motion.div>
    </section>
  );
}





