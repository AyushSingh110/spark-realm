"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              About <span className="text-gradient">Us</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nextgen Innovation is a university-level club dedicated to advancing
              AI research, exploring emerging technologies, and fostering
              student-led innovation. We host workshops, build open-source
              projects, and collaborate with industry experts to push boundaries.
            </p>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                {
                  title: "Vision",
                  desc: "A future where student innovators lead ethical, inclusive AI advancements.",
                },
                {
                  title: "Values",
                  desc: "Curiosity, collaboration, impact, and open knowledge.",
                },
                {
                  title: "Founding",
                  desc: "Established in 2021 by AI enthusiasts and faculty mentors.",
                },
                {
                  title: "Community",
                  desc: "Interdisciplinary members across CS, design, and engineering.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur hover:shadow-lg hover:shadow-accent/20 transition"
                >
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop"
              alt="Students collaborating on AI research"
              className="rounded-xl border border-border neon-border shadow-lg"
              loading="lazy"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}