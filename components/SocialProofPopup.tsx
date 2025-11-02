"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const notifications = [
  "Chisom from Lagos just bought 2 bottles 2 hours ago",
  "Amaka from Abuja ordered Miracle Hair Oil 45 mins ago",
  "Bola from Port Harcourt just got 1 bottle 1 hour ago",
  "John from Enugu restocked 3 bottles 30 mins ago",
  "Mary from Ibadan placed an order 10 mins ago",
  "Tolu from Benin just bought 2 bottles 20 mins ago",
  "Gift from Asaba ordered 1 bottle 5 mins ago",
  "Precious from Uyo just restocked her Miracle Oil 15 mins ago",
  "Daniel from Jos ordered 2 bottles 3 hours ago",
  "Chioma from Owerri just grabbed the Buy 2 Get 1 Free offer 25 mins ago",
  "Ada from Aba just ordered Miracle Oil 40 mins ago",
  "Ifeoma from Awka bought 2 bottles 1 hour ago",
  "Segun from Ilorin just made an order 3 hours ago",
  "Martha from Calabar restocked 1 bottle 35 mins ago",
  "Ruth from Kaduna placed an order 25 mins ago",
  "Uche from Warri just bought 2 bottles 10 mins ago",
  "Esther from Onitsha ordered Miracle Oil 5 mins ago",
  "Favour from Owerri just restocked 3 bottles 15 mins ago",
  "Joy from Ibadan ordered 2 bottles 50 mins ago",
  "Emeka from Lagos just made a purchase 1 hour ago",
  "Deborah from Port Harcourt got the promo offer 2 hours ago",
  "Olamide from Abeokuta ordered 1 bottle 20 mins ago",
  "Sophie from Abuja restocked 2 bottles 40 mins ago",
  "Blessing from Uyo placed a new order 10 mins ago",
  "Efe from Warri bought 1 bottle 5 mins ago",
  "Queen from Enugu just got her Miracle Oil 1 hour ago",
  "Ngozi from Lagos restocked 2 bottles 2 hours ago",
  "Chika from Jos ordered 1 bottle 30 mins ago",
  "Helen from Benin bought 3 bottles 50 mins ago",
  "Faith from Asaba placed an order 15 mins ago",
  "Titi from Ibadan restocked Miracle Oil 10 mins ago",
  "David from Calabar bought 2 bottles 3 hours ago",
  "Angela from Abuja ordered 1 bottle 25 mins ago",
  "Juliet from Onitsha just placed an order 5 mins ago",
  "Michael from Owerri restocked 3 bottles 45 mins ago",
  "Sandra from Port Harcourt bought 2 bottles 35 mins ago",
  "Gbenga from Lagos just made a purchase 1 hour ago",
  "Cynthia from Enugu ordered Miracle Oil 15 mins ago",
  "Chinedu from Aba just got 2 bottles 20 mins ago",
  "Ijeoma from Asaba restocked 1 bottle 2 hours ago",
  "Ugo from Abuja just bought 2 bottles 50 mins ago",
  "Peace from Uyo ordered 3 bottles 25 mins ago",
  "Miriam from Lagos just claimed the promo 30 mins ago",
  "Glory from Benin just ordered 1 bottle 10 mins ago",
  "Kemi from Ibadan restocked Miracle Oil 1 hour ago",
  "Victor from Calabar bought 2 bottles 3 hours ago",
  "Ezinne from Owerri just made an order 40 mins ago",
  "Amarachi from Port Harcourt ordered 2 bottles 15 mins ago",
  "Chima from Abuja bought 3 bottles 35 mins ago",
  "Ogechi from Onitsha just ordered 1 bottle 25 mins ago",
  "Blessing from Jos got 2 bottles 5 mins ago",
  "Rose from Abeokuta just purchased 1 bottle 2 hours ago",
  "Fidelia from Lagos ordered 2 bottles 50 mins ago",
  "Tosin from Warri restocked 1 bottle 30 mins ago",
  "Jennifer from Uyo bought 2 bottles 45 mins ago",
  "Rita from Ibadan placed an order 10 mins ago",
  "Samson from Enugu just made a purchase 20 mins ago",
  "Goodness from Asaba ordered 2 bottles 35 mins ago",
  "Chidera from Abuja bought 3 bottles 1 hour ago",
  "Patience from Owerri ordered 1 bottle 15 mins ago",
  "Esther from Benin got 2 bottles 25 mins ago"
];


export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // preload audio
    audioRef.current = new Audio("/sounds/notification.mp3");
    audioRef.current.volume = 0.2;
  }, []);

  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const showNotification = () => {
      const random = notifications[Math.floor(Math.random() * notifications.length)];
      setMessage(random);
      setVisible(true);

      // play sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {}); // prevent browser block error
      }

      hideTimer = setTimeout(() => setVisible(false), 5000);
    };

    // first show
    showTimer = setTimeout(showNotification, 3000);

    // re-show every 10 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Sound file (you’ll need to add it manually in /public/sounds/notification.mp3) */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 z-[9999] w-[90%] md:w-auto"
          >
            <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl px-5 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amber-600 w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-gray-800 font-medium">{message}</p>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
