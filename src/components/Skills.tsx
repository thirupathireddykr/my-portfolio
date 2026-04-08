import { motion, type Variants } from 'framer-motion';
import { skills } from '../data/portfolioData';

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Tech Arsenal</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl font-light">
            The specialized tools and technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center px-8 py-6 bg-muted/30 backdrop-blur-xl border border-border/50 rounded-2xl cursor-default transition-all duration-300 hover:border-accent/50 hover:bg-muted/60 shadow-lg hover:shadow-[0_0_40px_rgba(var(--accent-color),0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="text-xs font-mono text-accent/60 tracking-widest uppercase mb-2 group-hover:text-accent transition-colors">
                {skill.category}
              </span>
              <span className="text-md md:text-lg font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
