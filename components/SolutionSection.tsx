"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sliderImages1 = [
  "/slider1.jpeg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
];

const sliderImages2 = [
  "/slider5.jpeg",
  "/slider6.jpg",
  "/slider7.jpg",
  "/slider8.jpeg",
];

export default function SolutionSection() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 max-w-7xl mx-auto items-center gap-8 px-6 relative">
        {/* Left Vertical Slider */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl">
          <Swiper
            direction="vertical"
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            className="w-full h-full"
          >
            {sliderImages1.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`slide-${i}`}
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug font-dmSerif">
            The Cinex Miracle: Where Growth Finally Begins
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Crafted from nature’s most potent oils and botanicals, Miracle Hair Growth Oil
            restores balance to your scalp, awakens dormant follicles, and revives your
            hair’s natural strength and shine.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left max-w-md mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌿 Stimulates Real Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Rosemary, castor, and peppermint extracts encourage faster, thicker growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💧 Deeply Nourishes & Strengthens</h3>
              <p className="text-gray-600 leading-relaxed">
                Replenishes moisture and fortifies strands from within.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌸 Soothes Dry, Irritated Scalp</h3>
              <p className="text-gray-600 leading-relaxed">
                Calms and balances your scalp for long-term health.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✨ 100% Natural, Honest Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Pure, nutrient-rich, and free of synthetic fillers.
              </p>
            </div>
          </div>

          <Button
            asChild
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg transition-all"
          >
            <Link href="#shop">Experience the Miracle</Link>
          </Button>
        </motion.div>

        {/* Right Vertical Slider */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl">
          <Swiper
            direction="vertical"
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            className="w-full h-full"
          >
            {sliderImages2.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`slide-${i}`}
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 space-y-8">
        <div>
          <Swiper
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
          >
            {sliderImages1.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`mobile-slide-${i}`}
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover w-full h-[200px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <Swiper
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
          >
            {sliderImages2.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`mobile-slide2-${i}`}
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover w-full h-[200px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-10"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            The Cinze Miracle
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Restore balance to your scalp, awaken dormant follicles, and revive your hair’s
            natural strength and shine.
          </p>

          <Button
            asChild
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg transition-all"
          >
            <Link href="#shop">Experience the Miracle</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

