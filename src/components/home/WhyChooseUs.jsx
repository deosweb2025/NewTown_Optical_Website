import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Award, ThumbsUp, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: 1,
    title: "Premium Quality",
    description: "We source only the finest materials and high-end designer frames to ensure unparalleled durability and style.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Expert Optometrists",
    description: "Our certified professionals use state-of-the-art equipment to provide accurate, comprehensive eye exams.",
    icon: Award,
  },
  {
    id: 3,
    title: "Customer First",
    description: "Your vision and comfort are our top priorities. We offer personalized consultations to find your perfect fit.",
    icon: ThumbsUp,
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "We utilize advanced lab technology to craft your lenses quickly without ever compromising on quality.",
    icon: Clock,
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear array to prevent double-stagger during hot reload
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Animate cards
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 relative bg-[#050b14] text-white overflow-hidden"
    >
      {/* Premium CSS Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5" ref={headingRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              The Newtown Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-script font-normal tracking-wide mb-6 leading-tight heading-underline heading-underline-left">
              Why we are the <span className="text-primary">trusted choice</span> for your eyes.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We combine years of clinical expertise with a curated selection of global eyewear brands. Discover a luxury optical experience tailored exclusively to your vision needs and personal style.
            </p>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={reason.id}
                  ref={el => { if (el) cardsRef.current[index] = el; }}
                  className="premium-card-dark group h-full"
                >
                  <div className="p-8 relative z-10 h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 group-hover:text-white transition-all duration-500 relative z-20">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white relative z-20">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm relative z-20">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
