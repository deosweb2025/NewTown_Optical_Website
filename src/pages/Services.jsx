import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/common/PageHeader";
import FeaturedServices from "../components/home/FeaturedServices";
import SectionHeading from "../components/common/SectionHeading";
import { siteData } from "../data/siteData";

gsap.registerPlugin(ScrollTrigger);

const EyeCareProcess = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef(null);
  // Reset refs on every render
  stepsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      if (lineRef.current) {
        tl.fromTo(lineRef.current,
          { scaleX: 0, transformOrigin: "left center", opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }
        );
      }

      tl.fromTo(stepsRef.current, 
        { scale: 0.5, y: 40, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "back.out(1.7)",
          clearProps: "transform"
        },
        "-=1.2"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: "01", title: "Consultation", desc: "Discuss your visual needs and lifestyle with our experts." },
    { num: "02", title: "Testing", desc: "Comprehensive computerised eye examination for precise prescription." },
    { num: "03", title: "Selection", desc: "Choose from our premium collection of frames with personalized styling." },
    { num: "04", title: "Fitting", desc: "Expert fitting and adjustment for optimal comfort and perfect vision." }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <SectionHeading 
          subtitle="How It Works" 
          title={<span className="font-script font-normal tracking-wide text-secondary">The Journey to <span className="text-primary">Clear Vision</span></span>}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {/* Connecting line for desktop */}
          <div ref={lineRef} className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 z-0 origin-left"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => { if (el) stepsRef.current[index] = el; }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-surface border-4 border-white shadow-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <span className="text-3xl font-bold text-primary group-hover:text-primary-dark transition-colors">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <main>
      <PageHeader 
        title={<span className="font-script text-white font-normal tracking-wide px-1">Our Services</span>}
        subtitle="What We Offer"
        image={siteData.images.servicesHeader}
        layout="center"
      />
      <FeaturedServices limit={100} hideViewAll={true} withBackground={false} />
      <EyeCareProcess />
    </main>
  );
};

export default Services;
