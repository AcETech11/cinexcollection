"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Apply",
    desc: "Use a few drops and apply directly to your scalp, focusing on thinning or problem areas.",
    icon: "/apply.png",
  },
  {
    id: 2,
    title: "Massage",
    desc: "Gently massage in circular motions for 3–5 minutes to boost blood flow and activate follicles.",
    icon: "/massage.png",
  },
  {
    id: 3,
    title: "Grow",
    desc: "Let the oil work its magic—nourishing, repairing, and stimulating new healthy growth.",
    icon: "/grow.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.15),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-dmSerif">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            3 simple steps to transform your hair from stressed and brittle to full,
            thick, and thriving.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-amber-100"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50/60 rounded-3xl" />

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6 rounded-full">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={70}
                  height={70}
                  className="drop-shadow-md rounded-full"
                />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-dmSerif">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
