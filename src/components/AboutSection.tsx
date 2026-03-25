import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Heart, Leaf } from "lucide-react";

const values = [
  { icon: Heart, title: "Passion", text: "Every print is a labor of love" },
  { icon: Award, title: "Quality", text: "Uncompromising standards since 1987" },
  { icon: Clock, title: "Precision", text: "Meticulous attention to every detail" },
  { icon: Leaf, title: "Sustainable", text: "Eco-friendly inks and recycled stocks" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Parallax decorative block */}
          <motion.div style={{ y }} className="relative">
            <div className="relative">
              <div className="w-full h-[420px] rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
                {/* Press cylinder animation */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary" />
                      </div>
                    </div>
                  </motion.div>
                  {/* Ink line */}
                  <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -translate-y-1/2 left-full ml-4 w-20 h-0.5 bg-primary/40 origin-left"
                  />
                </div>
              </div>
              {/* Offset decorative card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-5 shadow-lg"
              >
                <div className="text-3xl font-display font-bold text-gradient-copper">37</div>
                <div className="text-xs text-muted-foreground font-body">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-xs font-body font-medium text-primary uppercase tracking-[0.3em] mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              A Legacy of <br />
              <span className="italic text-gradient-copper">Fine Printing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-body leading-relaxed mb-8"
            >
              Founded in 1987, PressCraft has been at the forefront of artisan printing 
              for over three decades. We combine time-honored letterpress techniques 
              with cutting-edge digital technology to deliver prints that are both 
              beautiful and precise. Our workshop houses vintage Heidelberg presses 
              alongside modern HP Indigo digital presses.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-body font-semibold text-foreground">{v.title}</div>
                      <div className="text-xs text-muted-foreground font-body">{v.text}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
