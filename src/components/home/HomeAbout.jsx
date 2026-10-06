import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "../../data/siteData";

import heroAi1 from "../../assets/images/hero_ai_1.jpg";
import heroAi2 from "../../assets/images/hero_ai_2.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = ({ hideLink }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img-large", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      
      gsap.from(".about-img-small", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });



      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Images Section */}
          <div className="w-full lg:w-1/2 relative min-h-[500px]">
            {/* Large Image */}
            <div className="about-img-large absolute top-0 left-0 w-4/5 h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-transparent animate-border-glow">
              <img 
                src={heroAi2} 
                alt={`${siteData.company.name} interior`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small Overlapping Image */}
            <div className="about-img-small absolute -bottom-10 right-0 w-[55%] h-[280px] md:h-[320px] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img 
                src={heroAi1} 
                alt={`${siteData.company.name} storefront`}
                className="w-full h-full object-cover"
              />
            </div>
            

            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl z-0"></div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 about-content mt-12 lg:mt-0 relative z-20">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-primary"></span>
                <span className="text-primary font-bold tracking-wider text-sm uppercase">About Us</span>
              </div>
              {!hideLink && (
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group"
                >
                  <span>About Page</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-script font-normal tracking-wide text-secondary mb-6 leading-tight heading-underline heading-underline-left">
              A Legacy of <span className="text-primary">Clear Vision</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At <strong className="text-secondary">{siteData.company.name}</strong>, we believe that clear vision is not just a necessity, but a lifestyle. Located in the heart of Newtown, Kolkata, we have been serving our community with premium eye care services.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our commitment goes beyond selling glasses; we ensure every customer leaves with the perfect fit, accurate prescription, and a style that complements their personality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-secondary">Expert Optometrists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-secondary">Top Global Brands</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-secondary">Accurate Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-secondary">Perfect Fitting</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-script text-primary font-bold">B</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Founder & Owner</p>
                <p className="font-script text-2xl text-secondary">{siteData.company.owner}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
