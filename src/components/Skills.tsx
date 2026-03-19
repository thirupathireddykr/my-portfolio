import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

// Generate more skills for the marquee to scroll infinitely without gaps
const marqueeSkills = [...skills, ...skills, ...skills, ...skills];
const reverseMarqueeSkills = [...marqueeSkills].reverse();

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center">Tech Stack</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="text-secondary text-center max-w-2xl mx-auto text-lg text-balance">
            A comprehensive list of technologies and tools I work with on a daily basis to build modern web applications.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee wrapper */}
      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden mix-blend-difference pb-8">
        {/* Left to right transparent masks */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-muted/30 via-transparent to-muted/30 w-full" />
        
        {/* Row 1 - Left to Right */}
        <div className="flex w-fit">
           <motion.div 
             className="flex gap-6 pr-6 whitespace-nowrap"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 40, ease: "linear", repeat: Infinity }}
           >
              {marqueeSkills.map((skill, i) => (
                <div key={`${skill.name}-${i}`} className="flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-2xl">
                   <span className="text-xl font-medium tracking-tight whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
           </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-fit ml-[-50%]">
           <motion.div 
             className="flex gap-6 pr-6 whitespace-nowrap"
             animate={{ x: ["-50%", "0%"] }}
             transition={{ duration: 50, ease: "linear", repeat: Infinity }}
           >
              {reverseMarqueeSkills.map((skill, i) => (
                <div key={`rev-${skill.name}-${i}`} className="flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-2xl">
                   <span className="text-xl font-medium tracking-tight whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
