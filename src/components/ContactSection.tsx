import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 paper-texture relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-xs font-body font-medium text-primary uppercase tracking-[0.3em] mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Start Your <br />
              <span className="italic text-gradient-copper">Next Project</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-body mb-10 leading-relaxed max-w-md"
            >
              Whether it's a run of 100 letterpress cards or 100,000 brochures, 
              we'd love to bring your vision to life. Drop us a line.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: MapPin, text: "42 Gutenberg Lane, Print District, NY 10001" },
                { icon: Phone, text: "+1 (555) 012-3456" },
                { icon: Mail, text: "hello@presscraft.studio" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-body">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <div>
                <label className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2 block">Service</label>
              <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                <option>Letterpress Printing</option>
                <option>Offset Printing</option>
                <option>Foil Stamping</option>
                <option>Book Binding</option>
                <option>Packaging</option>
                <option>Digital Print</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Send Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
