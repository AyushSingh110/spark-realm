"use client";

import { motion } from "framer-motion";

type Project = { title: string; image: string; tags: string[] };

const projects: Project[] = [
  {
    title: "Campus Vision: Smart Navigation",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Computer Vision", "Edge AI"],
  },
  {
    title: "LLM Study: Prompt Patterns",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    tags: ["NLP", "LLMs"],
  },
  {
    title: "Robotics: Autonomous Rover",
    image:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Robotics", "Sensors"],
  },
  {
    title: "Ethics: AI Fairness Toolkit",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
    tags: ["Ethics", "Tooling"],
  },
  {
    title: "Voice: Real-time Transcriber",
    image:
      "https://images.unsplash.com/photo-1516646255117-8daf7e0d72af?q=80&w=1600&auto=format&fit=crop",
    tags: ["Speech", "Web"],
  },
  {
    title: "Healthcare: Diagnosis Assist",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
    tags: ["Healthcare", "ML"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Student-led research and real-world builds.
            </p>
          </div>
          <a
            href="#join"
            className="hidden sm:inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary hover:scale-105 transition"
          >
            Contribute
          </a>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur shadow-lg hover:shadow-accent/20 transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition"
                  aria-hidden
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:scale-105 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-secondary/60 px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}