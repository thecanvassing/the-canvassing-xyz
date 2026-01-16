import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2, decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end * Math.pow(10, decimals)) / Math.pow(10, decimals));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, decimals, isInView]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    {
      label: "Average Responses",
      value: 200,
      suffix: "+",
      prefix: "",
      decimals: 0,
      change: "↑ 24% from last week",
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Average Response Time",
      value: 2.3,
      suffix: " days",
      prefix: "",
      decimals: 1,
      change: "↑ 10% faster",
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Quality Score",
      value: 98,
      suffix: "%",
      prefix: "",
      decimals: 0,
      change: "Verified responses",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <div className="w-full">
      {/* Traffic Light Dots */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-card border border-border/50"
          >
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${stat.color}`}>
              {stat.label}
            </div>
            <div className="text-2xl font-display font-bold text-foreground mb-1">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
                duration={2}
              />
            </div>
            <div className="text-sm text-muted-foreground">{stat.change}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
