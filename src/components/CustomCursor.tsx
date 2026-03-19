import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render cursor on touch devices where JS runs before matchMedia check
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "2px solid var(--color-accent)",
      opacity: 0.5,
      transition: {
         type: "spring",
         stiffness: 150,
         damping: 15,
         mass: 0.5
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      backgroundColor: "var(--color-accent)",
      border: "2px solid transparent",
      opacity: 0.2,
      transition: {
         type: "spring",
         stiffness: 150,
         damping: 15,
         mass: 0.5
      }
    }
  };

  const dotVariants: Variants = {
     default: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        opacity: 1,
     },
     hover: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        opacity: 0,
     }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        variants={dotVariants}
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "tween", duration: 0 }}
      />
    </>
  );
}
