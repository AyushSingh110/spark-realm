"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Join form submission", data);
    setSubmitted(true);
  };

  return (
    <section
      id="join"
      className="py-20 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
    >
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Join <span className="text-yellow-300">NextGen Innovators</span>
            </h2>
            <p className="mt-3 text-lg text-white/90">
              Become part of a community building the future of AI.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>🚀 Weekly workshops and project meetups</li>
              <li>🤝 Mentorship and research opportunities</li>
              <li>🌍 Collaborations with startups and labs</li>
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur shadow-lg"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="block text-sm font-medium"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/20 px-3 py-2 text-black placeholder-gray-600 focus:ring-2 focus:ring-yellow-300"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/20 px-3 py-2 text-black placeholder-gray-600 focus:ring-2 focus:ring-yellow-300"
                        placeholder="jane@university.edu"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        className="block text-sm font-medium"
                        htmlFor="interest"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/20 px-3 py-2 text-black focus:ring-2 focus:ring-yellow-300"
                      >
                        <option>Computer Vision</option>
                        <option>Natural Language Processing</option>
                        <option>Robotics</option>
                        <option>Ethics & Safety</option>
                        <option>Product & Startup</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        className="block text-sm font-medium"
                        htmlFor="message"
                      >
                        Tell us about you
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/20 px-3 py-2 text-black placeholder-gray-600 focus:ring-2 focus:ring-yellow-300"
                        placeholder="What do you want to build?"
                      />
                    </div>
                    <div className="sm:col-span-2 flex items-center gap-2 text-sm">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4"
                      />
                      <label htmlFor="consent">
                        I agree to be contacted about club activities.
                      </label>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-yellow-400 px-4 py-2 font-semibold text-black shadow hover:opacity-90"
                  >
                    Submit Application
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-yellow-300">
                    🎉 Thanks for joining!
                  </h3>
                  <p className="mt-3 text-white/90">
                    We’ll be in touch soon with upcoming events and opportunities.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}