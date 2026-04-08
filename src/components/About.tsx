import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
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
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <div className="space-y-8 flex flex-col items-center w-full">
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-lg md:text-xl text-secondary max-w-3xl font-light leading-relaxed space-y-6 mx-auto">
              <p>
                Hello! I'm {personalInfo.name.split(' ')[0]}, a {personalInfo.role} based in Hyderabad, India. {personalInfo.bio}
              </p>
              <p>
                My journey started back in college when I decided to build something
                no one in my class was attempting — an IoT-powered aeroponic farming
                system. Not just the software. I soldered the sensors, wrote the
                Arduino firmware, built the Bluetooth pipeline, and shipped the
                Android app. That project taught me more than any classroom ever
                could.
              </p>
              <p>
                Fast-forward to today, and I'm working at TCS as a Software Engineer,
                managing cloud infrastructure and production systems for enterprise
                clients. Outside of work, I'm always building — currently focused on
                deepening my skills in backend architecture, distributed systems, and
                exploring how far I can push Java and Node.js.
              </p>
              <p>
                When I'm not coding, I'm probably thinking about the next thing to build.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
