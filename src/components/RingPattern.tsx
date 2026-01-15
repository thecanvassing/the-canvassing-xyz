import ringPattern from "@/assets/ring-pattern.svg";

interface RingPatternProps {
  position?: "left" | "right";
  className?: string;
}

const RingPattern = ({ position = "right", className = "" }: RingPatternProps) => {
  return (
    <img
      src={ringPattern}
      alt=""
      aria-hidden="true"
      className={`absolute pointer-events-none opacity-50 ${
        position === "right" 
          ? "right-0 top-1/2 -translate-y-1/2 translate-x-1/4" 
          : "left-0 top-1/2 -translate-y-1/2 -translate-x-1/4"
      } w-[600px] h-[600px] md:w-[800px] md:h-[800px] ${className}`}
    />
  );
};

export default RingPattern;
