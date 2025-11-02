"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function BenefitSection() {
  const benefits = [
    {
      icon: "🌿",
      title: "Accelerates Growth Naturally",
      desc: "See visible results in weeks with our plant-powered formula that awakens dormant follicles.",
    },
    {
      icon: "💧",
      title: "Repairs From the Root Up",
      desc: "Deeply nourishes your scalp to prevent thinning and breakage while restoring balance.",
    },
    {
      icon: "☀️",
      title: "Lightweight, Non-Greasy Texture",
      desc: "Keeps your hair fresh, shiny, and touchably soft all day long — without buildup.",
    },
    {
      icon: "🪶",
      title: "Protects All Hair Types",
      desc: "Gentle enough for both men and women — strong enough to fight dryness and damage.",
    },
    {
      icon: "💫",
      title: "Confidence You Can Feel",
      desc: "Fuller, healthier hair that reminds you who you are — bold, radiant, and unstoppable.",
    },
  ];

  return (
    <section id="benefits" className="relative bg-gradient-to-b from-amber-50 to-white py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug font-dmSerif">
            Beyond Hair Growth — It’s Confidence in a Bottle.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Every drop of <span className="font-semibold text-amber-700">Miracle Hair Growth Oil</span> 
            is crafted to restore, strengthen, and revive your natural beauty — 
            so your hair doesn’t just grow, it thrives.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-6 mt-8"
          >
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className=" items-start gap-4 group hidden md:flex"
              >
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right: Image & Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl" />
          <Image
            src="/miracle-oil-floating.webp"
            alt="Floating Miracle Hair Oil Bottle"
            width={500}
            height={600}
            className="z-10 rounded-3xl drop-shadow-2xl animate-float h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden mt-12 max-w-xs mx-auto">
        <Swiper
          effect="cards"
          grabCursor={true}
          autoplay={{ delay: 2500 }}
          loop={true}
          modules={[Autoplay, EffectCards]}
          className="mySwiper"
        >
          {benefits.map((b, i) => (
            <SwiperSlide
              key={i}
              className="bg-white shadow-xl p-6 rounded-3xl border border-amber-100"
            >
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
