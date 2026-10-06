import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Glasses, ZoomIn, Wrench, Sun, Activity, ShieldCheck, HeartPulse } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { siteData } from "../../data/siteData";
import bgImage from "../../assets/images/hero_ai_2.jpg";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  eye: Eye,
  glasses: Glasses,
  lens: ZoomIn,
  tool: Wrench,
  sun: Sun,
  activity: Activity,
  shield: ShieldCheck,
  heart: HeartPulse,
};

const FeaturedServices = ({ limit = 4, hideViewAll = false, withBackground = true }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Reset refs on every render to prevent stagger bugs during hot-reloads
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "transform,scale"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 md:py-32 relative ${withBackground ? 'bg-fixed bg-cover bg-center' : 'bg-gradient-to-br from-sky-100 via-white to-sky-200'}`}
      style={withBackground ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {withBackground && <div className="absolute inset-0 bg-slate-900/75 md:bg-slate-900/80 backdrop-blur-[2px]"></div>}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-6">
          <SectionHeading 
            subtitle="Our Expertise"
            title={<span className={`font-script font-normal tracking-wide ${withBackground ? 'text-white' : 'text-secondary'}`}>Premium <span className={withBackground ? "text-primary-light" : "text-primary"}>Eye Care</span> Services</span>}
            className={`mb-0 md:mb-0 ${withBackground ? '[&>span]:text-primary-light' : '[&>span]:text-primary'}`}
            centered={true}
          />
          {!hideViewAll && (
            <Link
              to="/services"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.services.slice(0, limit || siteData.services.length).map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id}
                ref={el => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <div className="premium-card relative bg-white p-8 rounded-2xl shadow-sm group overflow-hidden h-full">
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-primary/10">
                  {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative z-10 text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Minimalist Learn More arrow */}
                <div className="relative z-10 mt-6 flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Learn More <span className="ml-2 font-bold text-lg leading-none">→</span>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {!hideViewAll && (
          <div className="mt-10 text-center md:hidden">
            <Link
              to="/services"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedServices;
