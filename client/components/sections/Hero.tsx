"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Grid + Animated Orbs */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
        aria-hidden
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 py-24 md:py-32 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1 text-xs md:text-sm text-muted-foreground backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
          University AI & Emerging Tech Club
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Empowering the{" "}
          <span className="text-gradient glow">next generation</span> <br />
          of AI innovators
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-muted-foreground"
        >
          We are a student-led community exploring artificial intelligence,
          building real-world projects, and shaping the future of technology
          through research, workshops, and collaboration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:scale-105 hover:shadow-primary/50 transition-transform"
          >
            🚀 Explore Projects
          </a>
          <a
            href="#join"
            className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary hover:scale-105 transition-transform"
          >
            🤝 Join the Club
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Active Members", value: "200+" },
            { label: "Projects", value: "35+" },
            { label: "Events / Year", value: "20+" },
            { label: "Partners", value: "10+" },
          ].map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur hover:shadow-lg hover:shadow-accent/20 transition"
            >
              <p className="text-3xl font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}