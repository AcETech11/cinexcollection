"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How soon will I start seeing results?",
    answer:
      "Most users notice visible improvement within 2–4 weeks of consistent use, depending on their hair type and scalp condition. For best results, use daily and massage thoroughly.",
  },
  {
    question: "Is it suitable for both men and women?",
    answer:
      "Absolutely. Miracle Hair Growth Oil is crafted for everyone — men, women, and even protective styles. It promotes healthy growth and scalp balance regardless of gender or hair texture.",
  },
  {
    question: "Can I use it with other hair products?",
    answer:
      "Yes! It blends perfectly with your existing routine. Use it before or after moisturizing products — or mix a few drops into your conditioner for extra nourishment.",
  },
  {
    question: "Will it make my hair greasy or heavy?",
    answer:
      "Not at all. It’s lightweight and non-greasy, designed to absorb quickly into the scalp without buildup — so your hair feels fresh and breathable.",
  },
  {
    question: "Is it made with 100% natural ingredients?",
    answer:
      "Yes — every bottle is handcrafted from pure botanical oils like rosemary, castor, peppermint, and argan, with no artificial fillers or parabens.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-white via-amber-50/40 to-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-dmSerif">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Got questions? We’ve answered the most common ones below to help you feel confident before you order.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-amber-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            {/* Header */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <h3 className="text-gray-900 font-medium text-lg">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-amber-600" />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-5 pb-5"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-16 bg-amber-50/80 backdrop-blur-sm rounded-3xl shadow-md border border-amber-100 p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Chat directly with our support team on WhatsApp — we’re happy to help!
        </p>
        <Link
          href="https://wa.me/+2348106535064?text=Hi%20Cinze%20Collection!%20I%20have%20a%20few%20questions%20about%20the%20Miracle%20Hair%20Growth%20Oil."
          target="_blank"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </Link>
      </motion.div>
    </section>
  );
}

