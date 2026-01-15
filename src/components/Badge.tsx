import { cn } from "@/lib/utils";
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "purple";
  className?: string;
}
const Badge = ({
  children,
  variant = "default",
  className
}: BadgeProps) => {
  const variants = {
    default: "bg-white border-primary/30 text-primary",
    orange: "bg-accent/10 border-accent/30 text-accent",
    purple: "bg-primary/10 border-primary/30 text-primary"
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
export default Badge;