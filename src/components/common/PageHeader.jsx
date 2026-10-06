import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../../data/siteData";

const PageHeader = ({ title, subtitle, image, layout = "left" }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Determine alignment classes based on layout prop
  const alignmentClass = 
    layout === "center" ? "text-center mx-auto flex flex-col items-center" : 
    layout === "right" ? "text-right ml-auto flex flex-col items-end" : 
    "text-left mr-auto flex flex-col items-start";

  // Determine gradient overlays based on layout
  const gradientOverlay = 
    layout === "center" ? (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[#050b14]/10"></div>
      </>
    ) : layout === "right" ? (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#050b14]/80 via-[#050b14]/30 to-transparent"></div>
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/80 via-[#050b14]/30 to-transparent"></div>
      </>
    );

  return (
    <div ref={headerRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050b14]">
      <div className="absolute inset-0 z-0">
        <img
          src={image || siteData.images.hero}
          alt={title}
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Lighter, dynamic gradient overlays based on layout */}
        {gradientOverlay}
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 header-content">
        <div className={`max-w-3xl ${alignmentClass}`}>
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050b14]/40 border border-white/20 text-white shadow-xl text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              {subtitle}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white font-serif leading-tight drop-shadow-xl">
            {title}
          </h1>
          <div className="h-1.5 bg-gradient-to-r from-sky-400 to-primary rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]" style={{ animation: 'drawLineLeft 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
