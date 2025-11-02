"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const BUSINESS_PHONE = "2348106535064"; // Cinze Collection WhatsApp

type PackageOption = {
  id: string;
  title: string;
  price: number;
  normalPrice: number;
  meta?: string;
  note?: string;
};

const PACKAGES: PackageOption[] = [
  { id: "one", title: "Buy 1 Get 1 Free", price: 16000, normalPrice: 23000, note: "Limited time only" },
  { id: "two", title: "Buy 2 Get 1 Free", price: 23000, normalPrice: 30000, meta: "Free delivery" },
  { id: "three", title: "Buy 3 Get 1 Free", price: 30000, normalPrice: 35000, meta: "Free delivery" },
];

export default function ShopSection() {
  const [pkg, setPkg] = useState<string>("one");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [location, setLocation] = useState("");
  const [pickup, setPickup] = useState<"self" | "other">("self");
  const [payment, setPayment] = useState<"cod" | "prepay">("cod");
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    if (!fullName.trim()) return "Full name is required.";
    if (!phone.trim()) return "Phone number is required.";
    if (!whatsapp.trim()) return "WhatsApp number is required.";
    if (!location.trim()) return "Location is required.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);

    const selected = PACKAGES.find((p) => p.id === pkg)!;
    const message = encodeURIComponent(
      `Hello Cinex Collection 👋\n\nI’d like to order the *${selected.title}* offer.\n\n` +
        `Full Name: ${fullName}\nPhone: ${phone}\nWhatsApp: ${whatsapp}\nLocation: ${location}\n` +
        `Pickup: ${pickup === "self" ? "I’ll pick up" : "Someone else will pick up"}\n` +
        `Payment: ${payment === "cod" ? "Pay on delivery" : "Payment before delivery"}\n\n` +
        `Offer: ₦${selected.price.toLocaleString()} (Normal ₦${selected.normalPrice.toLocaleString()})\n${selected.meta ?? ""}`
    );

    const waUrl = `https://wa.me/${BUSINESS_PHONE}?text=${message}`;
    setSubmitting(true);

    window.open(waUrl, "_blank");
    toast.success("Redirecting to WhatsApp…");
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <section id="shop" className="relative bg-gradient-to-b from-amber-50 via-white to-amber-100/30 py-24 px-6">
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 font-dmSerif">Ready to Grow? 🌿</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose your offer below and fill in your details to get your <strong>Miracle Hair Growth Oil</strong> delivered to you.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-amber-100 rounded-3xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto space-y-10"
      >
        {/* Offers */}
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <label
              key={p.id}
              className={`rounded-2xl p-6 border cursor-pointer transition-all ${
                pkg === p.id ? "border-amber-600 bg-amber-50 shadow-lg" : "border-gray-200 hover:shadow-md"
              }`}
            >
              <input type="radio" name="package" className="hidden" value={p.id} checked={pkg === p.id} onChange={() => setPkg(p.id)} />
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="text-amber-700 text-lg font-medium mt-1">₦{p.price.toLocaleString()}</p>
              <p className="text-gray-400 text-sm mb-2">
                <del>₦{p.normalPrice.toLocaleString()}</del>
              </p>
              {p.meta && <p className="text-sm text-gray-700">{p.meta}</p>}
              {p.note && <p className="text-xs text-gray-500 mt-1">{p.note}</p>}
            </label>
          ))}
        </div>

        {/* Input fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <label className="flex flex-col text-left">
            <span className="text-sm text-gray-700 mb-1">Full Name</span>
            <input
              className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="text-sm text-gray-700 mb-1">Phone Number</span>
            <input
              className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="text-sm text-gray-700 mb-1">WhatsApp Number</span>
            <input
              className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="text-sm text-gray-700 mb-1">Location</span>
            <input
              className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Pickup + Payment */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Pickup</p>
            <div className="flex gap-3">
              {["self", "other"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm ${
                    pickup === option ? "border-amber-600 bg-amber-50" : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="pickup"
                    value={option}
                    checked={pickup === option}
                    onChange={() => setPickup(option as "self" | "other")}
                    className="hidden"
                  />
                  {option === "self" ? "I’ll pick up" : "Someone else will pick up"}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Payment</p>
            <div className="flex gap-3">
              {["cod", "prepay"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm ${
                    payment === option ? "border-amber-600 bg-amber-50" : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option}
                    checked={payment === option}
                    onChange={() => setPayment(option as "cod" | "prepay")}
                    className="hidden"
                  />
                  {option === "cod" ? "Pay on delivery" : "Payment before delivery"}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md transition-all"
          >
            {submitting ? "Processing..." : "Continue to WhatsApp"}
          </button>

          <p className="text-sm text-gray-500">
            You’ll be redirected to WhatsApp (<strong>+234 810 653 5064</strong>) to confirm your order.
          </p>
        </div>
      </motion.form>
    </section>
  );
}
