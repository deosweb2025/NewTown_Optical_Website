import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import bannerPremium from "../../assets/images/banner_premium_eyewear.jpg";
import bannerTesting from "../../assets/images/banner_advanced_testing.jpg";
import bannerExpert from "../../assets/images/banner_expert_care.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const banners = [
  {
    id: 1,
    title: "Premium Collections",
    subtitle: "Explore luxury eyewear from top global brands",
    image: bannerPremium,
    link: "/gallery",
  },
  {
    id: 2,
    title: "Advanced Eye Testing",
    subtitle: "State-of-the-art technology for precise vision care",
    image: bannerTesting,
    link: "/services",
  },
  {
    id: 3,
    title: "Expert Consultation",
    subtitle: "Personalized advice from certified optometrists",
    image: bannerExpert,
    link: "/about",
  }
];

const PromoBanners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".banner-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 bg-[#050b14]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <Link 
              to={banner.link} 
              key={banner.id}
              className="banner-card group relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg block"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${banner.image})` }}
              ></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {banner.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-75">
                  {banner.subtitle}
                </p>
                <div className="flex items-center text-primary font-medium text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-100">
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
