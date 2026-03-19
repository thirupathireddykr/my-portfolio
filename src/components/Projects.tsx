import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mb-16">
            <motion.h2 variants={cardVariants} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </motion.h2>
            <motion.div variants={cardVariants} className="w-20 h-1 bg-accent rounded-full mb-8"></motion.div>
            <motion.p variants={cardVariants} className="text-secondary max-w-2xl text-lg text-balance">
              Take a look at some of my recent work. These projects demonstrate my expertise in frontend development, architecture design, and attention to detail.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                viewport={{ once: true }}
                className="h-full"
              >
                <SpotlightCard className="group flex flex-col h-full bg-background border border-border rounded-2xl hover:border-foreground/30 transition-colors duration-500">
                  {/* Project Image Placeholder / Abstract Gradient */}
                  <div className="relative h-64 w-full overflow-hidden bg-muted flex items-center justify-center p-8 rounded-t-2xl">
                     <div 
                        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                        style={{ backgroundImage: `url(${project.image})` }} 
                     />
                     
                     {/* Fallback abstract if image fails/loads */}
                     <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent mix-blend-multiply" />
                     
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                        <a href={project.githubUrl} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors" aria-label="Github link" target="_blank" rel="noreferrer">
                           <Github size={24} />
                        </a>
                        <a href={project.liveUrl} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors" aria-label="Live Demo link" target="_blank" rel="noreferrer">
                           <ExternalLink size={24} />
                        </a>
                     </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-secondary transition-all">
                      {project.title}
                    </h3>
                    <p className="text-secondary mb-6 flex-grow text-balance leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono px-3 py-1 bg-muted text-secondary rounded-full border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
