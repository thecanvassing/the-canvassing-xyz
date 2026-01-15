import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  className?: string;
}

const ParallaxHero = ({ children, className = "" }: ParallaxHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background - moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Subtle scale effect on background
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Content fades and moves up as you scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section 
      ref={ref} 
      className={`relative py-16 md:py-24 overflow-hidden ${className}`}
    >
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-hero-gradient"
        style={{ 
          y: backgroundY,
          scale: backgroundScale
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-radial-glow"
        style={{ 
          y: backgroundY,
          scale: backgroundScale
        }}
      />
      
      {/* Content with subtle parallax */}
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ 
          y: contentY,
          opacity: contentOpacity
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxHero;
