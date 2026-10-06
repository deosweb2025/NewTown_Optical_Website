import { useEffect, useRef } from "react";
import gsap from "gsap";

const shapes = [
  {
    name: "Rectangle",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <rect x="10" y="10" width="32" height="20" rx="3" />
        <rect x="58" y="10" width="32" height="20" rx="3" />
        <path d="M42 18 Q 50 16 58 18" />
        <path d="M10 18 L 2 15" />
        <path d="M90 18 L 98 15" />
      </svg>
    )
  },
  {
    name: "Cateye",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <path d="M10 25 C 10 35, 38 35, 42 20 C 42 10, 15 5, 10 25 Z" />
        <path d="M90 25 C 90 35, 62 35, 58 20 C 58 10, 85 5, 90 25 Z" />
        <path d="M42 20 Q 50 18 58 20" />
        <path d="M12 12 L 2 10" />
        <path d="M88 12 L 98 10" />
      </svg>
    )
  },
  {
    name: "Aviator",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <path d="M12 15 C 12 5, 40 5, 42 15 C 45 35, 20 35, 12 15 Z" />
        <path d="M88 15 C 88 5, 60 5, 58 15 C 55 35, 80 35, 88 15 Z" />
        <path d="M42 12 Q 50 10 58 12" />
        <path d="M42 18 Q 50 16 58 18" />
        <path d="M12 15 L 2 12" />
        <path d="M88 15 L 98 12" />
      </svg>
    )
  },
  {
    name: "Geometric",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <polygon points="15,10 35,10 42,20 30,30 20,30 10,20" />
        <polygon points="85,10 65,10 58,20 70,30 80,30 90,20" />
        <path d="M42 18 Q 50 16 58 18" />
        <path d="M12 15 L 2 12" />
        <path d="M88 15 L 98 12" />
      </svg>
    )
  },
  {
    name: "Round",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <circle cx="26" cy="20" r="14" />
        <circle cx="74" cy="20" r="14" />
        <path d="M40 20 Q 50 16 60 20" />
        <path d="M12 20 L 2 18" />
        <path d="M88 20 L 98 18" />
      </svg>
    )
  },
  {
    name: "Clubmaster",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <path d="M10 15 C 10 5, 42 5, 42 15" strokeWidth="4" />
        <path d="M90 15 C 90 5, 58 5, 58 15" strokeWidth="4" />
        <path d="M10 15 C 10 35, 40 30, 42 15" />
        <path d="M90 15 C 90 35, 60 30, 58 15" />
        <path d="M42 12 Q 50 10 58 12" />
        <path d="M10 12 L 2 10" />
        <path d="M90 12 L 98 10" />
      </svg>
    )
  },
  {
    name: "Square",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white transition-colors group-hover:text-primary-light">
        <rect x="12" y="8" width="30" height="24" rx="4" />
        <rect x="58" y="8" width="30" height="24" rx="4" />
        <path d="M42 15 Q 50 13 58 15" />
        <path d="M12 12 L 2 10" />
        <path d="M88 12 L 98 10" />
      </svg>
    )
  }
];

const FrameShapes = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const element = scrollRef.current;
    
    // Create a timeline for infinite horizontal scrolling
    const tl = gsap.to(element, {
      xPercent: -50,
      ease: "none",
      duration: 35,
      repeat: -1,
    });
    
    // Setup hover pause/play
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();
    
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      tl.kill();
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Double the array for seamless infinite scroll
  const displayShapes = [...shapes, ...shapes];

  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary opacity-80 pointer-events-none"></div>
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-[10%] bottom-[10%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white text-center mb-4 heading-underline inline-block w-full">
          Find Your Perfect Frame
        </h2>
        <p className="text-slate-300 text-center max-w-2xl mx-auto">
          Explore our collection organized by shape to find the perfect match for your face.
        </p>
      </div>

      <div className="relative flex overflow-hidden group z-10">
        <div 
          ref={scrollRef}
          className="flex gap-8 md:gap-12 px-4 w-max"
        >
          {displayShapes.map((shape, idx) => (
            <div key={`${shape.name}-${idx}`} className="flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px] cursor-pointer group/item">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mb-6 transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 hover:border-white/30 hover:-translate-y-2">
                {shape.svg}
              </div>
              <span className="font-semibold text-slate-200 text-lg transition-colors group-hover/item:text-white">{shape.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameShapes;
