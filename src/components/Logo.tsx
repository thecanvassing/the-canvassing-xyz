import logoSvg from "@/assets/logo.svg";

const Logo = ({ className = "", showText = true }: { className?: string; showText?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoSvg} alt="Canvassing logo" className="w-10 h-10 object-contain" />
      {showText && (
        <span className="font-display font-bold text-xl text-primary hidden sm:block">Canvassing</span>
      )}
    </div>
  );
};

export default Logo;
