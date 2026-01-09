import logoSvg from "@/assets/logo.svg";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
}

const Logo = ({ className = "", showText = true, textColor = "text-primary" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoSvg} alt="Canvassing logo" className="w-10 h-10 object-contain" />
      {showText && (
        <span className={`font-bold text-xl tracking-wide hidden sm:block ${textColor}`}>
          Canvassing
        </span>
      )}
    </div>
  );
};

export default Logo;
