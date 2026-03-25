import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import workCards from "@/assets/work-cards.jpg";
import workBook from "@/assets/work-book.jpg";
import workInvitation from "@/assets/work-invitation.jpg";
import workPackaging from "@/assets/work-packaging.jpg";

const works = [
  { image: workCards, title: "Business Cards", category: "Letterpress", size: "tall" },
  { image: workBook, title: "Book Publishing", category: "Binding", size: "normal" },
  { image: workInvitation, title: "Wedding Suite", category: "Foil Stamping", size: "normal" },
  { image: workPackaging, title: "Brand Packaging", category: "Packaging", size: "tall" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-28 paper-texture relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-xs font-body font-medium text-primary uppercase tracking-[0.3em] mb-4 block"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Our <span className="italic text-gradient-copper">Portfolio</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#contact"
            className="text-sm font-body font-medium text-primary hover:underline underline-offset-4"
          >
            View All Projects →
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative group cursor-pointer rounded-xl overflow-hidden ${
                work.size === "tall" ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={work.image}
                alt={work.title}
                className={`w-full object-cover transition-transform duration-700 ${
                  work.size === "tall" ? "h-full min-h-[400px]" : "h-[250px] lg:h-[300px]"
                } ${hoveredIdx === i ? "scale-110" : "scale-100"}`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-500 ${
                  hoveredIdx === i ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredIdx === i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-xs font-body text-copper-light uppercase tracking-wider">{work.category}</span>
                <h3 className="text-lg font-display font-bold text-cream mt-1">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
