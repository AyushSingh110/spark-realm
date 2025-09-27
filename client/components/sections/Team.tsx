"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Member = { name: string; role: string; image: string };

const team: Member[] = [
  {
    name: "Aisha Khan",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Liam Chen",
    role: "VP, Research",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sofia Garcia",
    role: "Events Lead",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prof. Patel",
    role: "Faculty Mentor",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">Team</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Student leads and faculty mentors.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-border bg-card/60 p-6 text-center backdrop-blur shadow hover:shadow-accent/20 transition"
            >
              {/* Avatar with Glow */}
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-md opacity-60 animate-pulse" />
                <Avatar className="relative mx-auto h-24 w-24 border-2 border-border shadow-md">
                  <AvatarImage src={m.image} alt={`${m.name} avatar`} />
                  <AvatarFallback>
                    {m.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Name + Role */}
              <p className="mt-5 font-semibold text-lg">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>

              {/* Social Links Placeholder */}
              <div className="mt-4 flex justify-center gap-3 text-muted-foreground">
                <a
                  href="#"
                  className="hover:text-primary transition"
                  aria-label="LinkedIn"
                >
                  🔗
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition"
                  aria-label="GitHub"
                >
                  💻
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}