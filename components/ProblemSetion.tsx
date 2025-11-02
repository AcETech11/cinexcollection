"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="bg-[#FAFAFA] py-28 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug font-dmSerif"
        >
          You’ve Done Everything Right — Yet Your Hair Still Refuses to Grow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg mb-16 leading-relaxed"
        >
          You’ve stayed consistent. You’ve invested in “miracle” oils, silk scarves, and
          countless treatments. But despite the effort — your hair feels dry, fragile,
          and stagnant. Each morning, it’s another battle with breakage, flakes, and
          slow growth that never seems to catch up with your patience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-12 md:grid-cols-2 text-left"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-dmSerif">
              Stunted Growth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your hair barely moves beyond a certain length — no matter how gentle or
              dedicated your routine. It feels like your growth journey has reached a
              quiet standstill.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-dmSerif">
              Breakage That Won’t Stop
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every detangle session ends with strands in your hand, your comb, your
              shower drain. The more you try to protect your hair, the more fragile it
              seems to become.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-dmSerif">
              A Scalp That Feels Forgotten
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tightness, dryness, and irritation that no product seems to calm. It’s the
              silent discomfort that keeps your hair from truly thriving.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-dmSerif">
              Promises Without Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You’ve trusted brands that spoke beautifully but delivered little. Your
              shelves are full — but your confidence is running empty.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
