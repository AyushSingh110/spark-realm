"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    alt: "Workshop session",
  },
  {
    src: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1600&auto=format&fit=crop",
    alt: "Hackathon teamwork",
  },
  {
    src: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1600&auto=format&fit=crop",
    alt: "Robotics demo",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop",
    alt: "AI lecture",
  },
  {
    src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    alt: "Project showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1537432376769-00a2b9b1ac4b?q=80&w=1600&auto=format&fit=crop",
    alt: "Brainstorming board",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">Gallery</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Snapshots from events, workshops, and demos.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => {
                setActive(i);
                setOpen(true);
              }}
              className="group relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-2 left-2 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden relative bg-black">
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="w-full h-full object-contain"
          />
          <div className="p-4 text-sm text-muted-foreground text-center">
            {images[active].alt}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActive((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
          >
            ◀
          </button>
          <button
            onClick={() => setActive((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
          >
            ▶
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}