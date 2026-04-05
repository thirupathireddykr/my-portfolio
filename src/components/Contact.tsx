import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

// EmailJS credentials loaded from .env (VITE_ prefix required by Vite)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
   const formRef = useRef<HTMLFormElement>(null);
   const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormStatus('submitting');
      setErrorMessage('');

      if (!formRef.current) return;

      const form = formRef.current;
      const templateParams = {
         from_name: (form.elements.namedItem('from_name') as HTMLInputElement).value,
         from_email: (form.elements.namedItem('from_email') as HTMLInputElement).value,
         subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
         message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
         to_email: 'thirupathireddykapa@gmail.com',
         reply_to: (form.elements.namedItem('from_email') as HTMLInputElement).value,
      };

      emailjs
         .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
         .then(() => {
            setFormStatus('success');
            formRef.current?.reset();
            setTimeout(() => setFormStatus('idle'), 3000);
         })
         .catch((error) => {
            console.error('EmailJS Error:', error);
            setFormStatus('error');
            setErrorMessage('Failed to send message. Please try again or email directly.');
            setTimeout(() => setFormStatus('idle'), 5000);
         });
   };

   return (
      <section id="contact" className="py-24 bg-muted/30 border-t border-border/50 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute right-0 bottom-0 pointer-events-none opacity-50">
            <div className="w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] translate-x-1/3 translate-y-1/3" />
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 items-start">

               {/* Left panel */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-2 space-y-8"
               >
                  <div>
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
                     <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                     <p className="text-secondary text-lg text-balance mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                     </p>
                     <a href={`mailto:${personalInfo.email}`} className="text-2xl font-medium hover:text-accent transition-colors">
                        {personalInfo.email}
                     </a>
                  </div>

                  <div className="pt-8 space-y-4">
                     <h3 className="text-sm font-mono tracking-widest text-secondary uppercase">Follow me</h3>
                     <div className="flex gap-4">
                        {personalInfo.socials.map(social => (
                           <a
                              key={social.name}
                              href={social.url}
                              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-secondary hover:text-foreground hover:border-foreground hover:scale-110 transition-all"
                              aria-label={social.name}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <social.icon size={20} />
                           </a>
                        ))}
                     </div>
                  </div>
               </motion.div>

               {/* Right panel (Form) */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-3 bg-background border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-500" />

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                           <input
                              type="text"
                              id="name"
                              name="from_name"
                              required
                              placeholder="John Doe"
                              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                           />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                           <input
                              type="email"
                              id="email"
                              name="from_email"
                              required
                              placeholder="john@example.com"
                              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-secondary">Subject</label>
                        <input
                           type="text"
                           id="subject"
                           name="subject"
                           required
                           placeholder="Project Inquiry"
                           className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                     </div>

                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                        <textarea
                           id="message"
                           name="message"
                           required
                           rows={5}
                           placeholder="Hi there, I wanted to talk about..."
                           className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                        />
                     </div>

                     <button
                        type="submit"
                        disabled={formStatus !== 'idle' && formStatus !== 'error'}
                        className="w-full py-4 bg-foreground text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                     >
                        {formStatus === 'idle' && (
                           <>
                              Send Message
                              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                           </>
                        )}
                        {formStatus === 'submitting' && (
                           <span className="flex items-center gap-2">
                              <motion.div
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                 className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                              />
                              Sending...
                           </span>
                        )}
                        {formStatus === 'success' && (
                           <span className="flex items-center gap-2 text-green-500">
                              <CheckCircle2 size={20} />
                              Message Sent!
                           </span>
                        )}
                        {formStatus === 'error' && (
                           <span className="flex items-center gap-2 text-red-500">
                              <AlertCircle size={20} />
                              {errorMessage}
                           </span>
                        )}
                     </button>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
