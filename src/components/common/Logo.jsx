import { Glasses } from "lucide-react";

const Logo = ({ className = "", dark = false }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 group-hover:rotate-12 ${dark ? 'bg-primary/20 text-primary-light' : 'bg-primary/10 text-primary'}`}>
        <Glasses size={24} strokeWidth={2.5} className="relative z-10" />
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${dark ? 'bg-primary-light/30' : 'bg-primary/20'}`}></div>
      </div>
      <div className="flex flex-col">
        <span className={`text-3xl font-script leading-none ${dark ? 'text-white' : 'text-secondary'}`}>
          Newtown
        </span>
        <span className={`text-[0.65rem] md:text-xs font-semibold tracking-[0.3em] uppercase leading-none mt-1 ${dark ? 'text-primary-light' : 'text-primary'}`}>
          Optical
        </span>
      </div>
    </div>
  );
};

export default Logo;
