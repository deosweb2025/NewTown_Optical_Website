import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { siteData } from "../../data/siteData";

import heroAi1 from "../../assets/images/hero_ai_1.jpg";
import heroAi2 from "../../assets/images/hero_ai_2.jpg";
import heroAi3 from "../../assets/images/hero_ai_3.jpg";

const heroImages = [heroAi1, heroAi2, heroAi3];

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(
        ".hero-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16 overflow-hidden bg-secondary">
      {/* Background Image with Overlay - Desktop Only */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden bg-secondary">
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${siteData.company.name} hero ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-10 md:py-0">
        <div ref={textRef} className="max-w-2xl text-white">
          <div className="hero-text flex items-center gap-4 mb-6 md:mb-8">
            <span className="h-[1px] w-12 bg-primary-light"></span>
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-primary-light">
              {siteData.company.name}
            </span>
          </div>
          <h1 className="hero-text text-5xl md:text-7xl font-script font-normal leading-[1.1] mb-8 md:mb-6 tracking-wide">
            See the world <br className="hidden md:block" />
            <span className="text-primary-light">clearly</span> and in <span className="text-primary-light">style</span>.
          </h1>
          
          {/* Mobile Image Card */}
          <div className="md:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative border border-white/10 p-2 bg-white/5 backdrop-blur-md">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              {heroImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${siteData.company.name} hero mobile ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              {/* Static crystal gloss overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 mix-blend-overlay"></div>
              {/* Dynamic synchronized shine */}
              <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-crystal-shine pointer-events-none"></div>
            </div>
          </div>

          <p className="hero-text text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            {siteData.company.description} Discover our premium collection of frames and lenses tailored for your comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
            <Link
              to="/gallery"
              className="hero-btn group relative px-8 py-4 bg-white text-secondary rounded-full font-medium transition-transform hover:scale-105 text-center flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              to="/about"
              className="hero-btn group px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
