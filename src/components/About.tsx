import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-muted/30 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Bio & Image Placeholder */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-invert max-w-none text-secondary">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm {personalInfo.name.split(' ')[0]}, a {personalInfo.role} based in Hyderabad, India. {personalInfo.bio}
              </p>
              <p className="text-lg leading-relaxed">
                My journey started back in college when I decided to build something
                no one in my class was attempting — an IoT-powered aeroponic farming
                system. Not just the software. I soldered the sensors, wrote the
                Arduino firmware, built the Bluetooth pipeline, and shipped the
                Android app. That project taught me more than any classroom ever
                could.
                <br /><br />
                Fast-forward to today, and I'm working at TCS as a Software Engineer,
                managing cloud infrastructure and production systems for enterprise
                clients. Outside of work, I'm always building — currently focused on
                deepening my skills in backend architecture, distributed systems, and
                exploring how far I can push Java and Node.js.
                <br /><br />
                When I'm not coding, I'm probably thinking about the next thing to build.
              </p>
            </motion.div>

            {/* Profile Picture Placeholder - Abstract Graphic */}
            <motion.div variants={itemVariants} className="w-full max-w-sm mx-auto lg:mx-0 mt-12 transition-transform duration-500 hover:scale-[1.02]">
              <SpotlightCard enableTilt={false} className="relative aspect-square group rounded-3xl overflow-hidden bg-background border border-border flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="rounded-2xl bg-foreground/10 group-hover:bg-accent/20 transition-colors" />
                  <div className="rounded-full bg-secondary/20 group-hover:bg-foreground/20 transition-colors" />
                  <div className="rounded-full bg-secondary/20 group-hover:bg-foreground/20 transition-colors" />
                  <div className="rounded-2xl rounded-br-[50%] bg-foreground/10 group-hover:bg-accent/20 transition-colors" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference">
                  <span className="text-6xl font-black text-white/50 tracking-tighter mix-blend-overlay">CODE</span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold tracking-tight">Technical Arsenal</motion.h3>
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill.name} className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">
                  {skill.name}
                </span>
              ))}
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">GraphQL</span>
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">REST APIs</span>
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">PostgreSQL</span>
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">Redis</span>
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">Docker</span>
              <span className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm hover:shadow-accent/10">AWS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
