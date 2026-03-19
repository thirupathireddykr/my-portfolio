import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            <p className="text-secondary max-w-2xl text-lg text-balance">
              My professional journey so far, working alongside great people to build excellent products.
            </p>
          </motion.div>

          <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12 pb-8">
             {experience.map((job) => (
                <motion.div 
                  key={job.id} 
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12 group"
                >
                   {/* Timeline dot */}
                   <div className="absolute top-1.5 -left-3.5 w-7 h-7 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                      <Briefcase size={12} className="text-secondary group-hover:text-accent transition-colors" />
                   </div>

                   <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold tracking-tight">{job.role}</h3>
                      <span className="text-accent font-mono text-sm px-3 py-1 bg-accent/10 rounded-full w-fit">
                         {job.duration}
                      </span>
                   </div>
                      
                   <div className="text-lg font-medium text-foreground/80 mb-4">
                      {job.company}
                   </div>
                   
                   <p className="text-secondary leading-relaxed text-balance">
                      {job.description}
                   </p>
                </motion.div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
