const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent via-yellow to-accent border-2 border-primary/20" />
        <span className="relative text-primary font-display font-bold text-xl">C.</span>
      </div>
      <span className="font-display font-bold text-xl text-primary hidden sm:block">Canvassing</span>
    </div>
  );
};

export default Logo;
