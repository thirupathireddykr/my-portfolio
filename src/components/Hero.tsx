import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      {/* Abstract Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[150px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full border border-border bg-muted/50 text-xs font-mono tracking-wider text-secondary mb-6 backdrop-blur-sm shadow-sm transition-colors hover:bg-muted/80 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div> */}

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-balance"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">{personalInfo.name.split(' ')[0]}</span><br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">A {personalInfo.role}.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-secondary max-w-xl mb-12 leading-relaxed font-light"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full cursor-pointer overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">View Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 bg-background/50 backdrop-blur-md text-foreground border border-border font-semibold rounded-full hover:bg-muted hover:border-accent/50 transition-all hover:scale-105"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer z-20 hidden md:flex"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs text-secondary tracking-widest uppercase mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"
        />
      </motion.div>
    </section>
  );
}
