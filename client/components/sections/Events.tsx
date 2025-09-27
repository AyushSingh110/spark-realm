"use client";

import { motion } from "framer-motion";

type Event = { title: string; date: string; location: string; description: string };

const events: Event[] = [
  {
    title: "Workshop: Intro to LLMs",
    date: "Nov 15, 2025 • 5:00 PM",
    location: "Engineering Lab 2A",
    description: "Hands-on session covering tokenization, prompting, and safety.",
  },
  {
    title: "Hackathon: Build with AI",
    date: "Dec 6–7, 2025",
    location: "Innovation Hub",
    description: "24-hour sprint to prototype AI-powered apps with mentors.",
  },
  {
    title: "Guest Lecture: Responsible AI",
    date: "Jan 12, 2026 • 6:30 PM",
    location: "Auditorium C",
    description: "A conversation with an industry researcher on fairness and bias.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Events</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Upcoming workshops, hackathons, and lectures.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary hover:scale-105 transition"
          >
            View All
          </a>
        </div>

        {/* Events Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur shadow-md hover:shadow-accent/20 transition"
            >
              {/* Date Badge */}
              <p className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-3">
                {e.date}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-lg group-hover:text-primary transition">
                {e.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>

              {/* Location */}
              <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
                📍 {e.location}
              </p>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow hover:scale-105 transition"
                >
                  Register →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}