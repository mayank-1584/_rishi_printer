import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Layers, Palette, Stamp, Box, FileText } from "lucide-react";

const services = [
  {
    icon: Stamp,
    title: "Letterpress",
    description: "Traditional deep-impression printing on premium cotton and textured stocks for tactile luxury.",
  },
  {
    icon: Layers,
    title: "Offset Printing",
    description: "High-volume precision printing with exceptional color accuracy and consistency.",
  },
  {
    icon: Palette,
    title: "Foil Stamping",
    description: "Metallic and holographic foil applications that add striking brilliance to any piece.",
  },
  {
    icon: BookOpen,
    title: "Book Binding",
    description: "Perfect, saddle-stitch, case binding and more — crafted for durability and beauty.",
  },
  {
    icon: Box,
    title: "Packaging",
    description: "Custom structural design and printing for luxury brand packaging that stands out.",
  },
  {
    icon: FileText,
    title: "Digital Print",
    description: "Quick-turnaround variable data printing with vibrant color and sharp detail.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl p-8 hover-lift ink-spread cursor-pointer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
        <Icon size={24} className="text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
      
      <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary">
        <span className="text-primary text-lg">→</span>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-28 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="text-xs font-body font-medium text-primary uppercase tracking-[0.3em] mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Crafted with <span className="italic text-gradient-copper">Precision</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "4rem" } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 bg-primary mx-auto mt-4"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
