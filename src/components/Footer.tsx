import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center rounded-md font-black text-xs">
              {personalInfo.name.charAt(0)}
           </div>
           <span className="font-medium tracking-tight text-sm">{personalInfo.name}</span>
        </div>
        
        <p className="text-secondary text-sm">
          &copy; {currentYear} All rights reserved. Built with React & Tailwind.
        </p>

        <div className="flex gap-4">
           {personalInfo.socials.map(social => (
              <a 
                key={social.name}
                href={social.url}
                className="text-secondary hover:text-foreground transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <social.icon size={18} />
              </a>
           ))}
        </div>
      </div>
    </footer>
  );
}
