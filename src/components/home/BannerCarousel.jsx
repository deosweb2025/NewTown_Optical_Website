import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner_bg_1.jpg";
import banner2 from "../../assets/images/banner_bg_2.jpg";
import banner3 from "../../assets/images/banner_bg_3.jpg";

const banners = [
  {
    id: 1,
    image: banner1,
    title: "FREE LENS REPLACEMENT",
    subtitle: "Any Frame | Any Power | Any Reason",
    buttonText: "Find Nearby Stores",
    buttonLink: "/contact",
    footerText: "Just pay ₹199 as Fitting Fee",
    footerSubtext: "Get Premium Anti-Glare Lenses. Upgrades are available",
    textColor: "text-white",
  },
  {
    id: 2,
    image: banner2,
    title: "PREMIUM SUNGLASSES",
    subtitle: "Protect your eyes with style | 100% UV Protection",
    buttonText: "Explore Collection",
    buttonLink: "/gallery",
    footerText: "Flat 20% OFF on Top Brands",
    footerSubtext: "Limited time offer. Terms & conditions apply",
    textColor: "text-white",
  },
  {
    id: 3,
    image: banner3,
    title: "BLUE LIGHT BLOCKERS",
    subtitle: "Say goodbye to digital eye strain",
    buttonText: "View Options",
    buttonLink: "/services",
    footerText: "Protect Your Vision Daily",
    footerSubtext: "Perfect for prolonged computer and phone use",
    textColor: "text-white",
  }
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Append a clone of the first banner at the end to create a seamless infinite loop
  const extendedBanners = [...banners, { ...banners[0], id: 'clone' }];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, []);

  // When we reach the cloned slide, wait for the animation to finish, then instantly snap back to the real first slide
  useEffect(() => {
    if (currentSlide === extendedBanners.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Turn off animation
        setCurrentSlide(0); // Snap back to start
      }, 1000); // 1000ms matches the transition duration in CSS
      
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedBanners.length]);

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] shadow-2xl">
          
          {/* Slider Container */}
          <div 
            className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {extendedBanners.map((banner, index) => (
              <div
                key={`${banner.id}-${index}`}
                className="w-full h-full flex-shrink-0 relative"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930]/90 via-[#0a1930]/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center px-8 md:px-16 md:w-2/3">
                  <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tight uppercase leading-none ${banner.textColor}`}>
                    {banner.title.split(' ').slice(0, 2).join(' ')}<br/>
                    {banner.title.split(' ').slice(2).join(' ')}
                  </h2>
                  
                  <p className={`text-lg md:text-xl mb-8 font-medium ${banner.textColor}`}>
                    {banner.subtitle}
                  </p>

                  <div>
                    <Link
                      to={banner.buttonLink}
                      className="inline-block bg-white text-[#0a1930] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base tracking-wide"
                    >
                      {banner.buttonText}
                    </Link>
                  </div>

                  <div className={`mt-8 ${banner.textColor}`}>
                    <p className="text-xl md:text-2xl font-bold">{banner.footerText}</p>
                    <p className="text-sm md:text-base opacity-80 mt-1">{banner.footerSubtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {banners.map((_, index) => {
              // The indicator for the clone should highlight the first dot
              const isActive = currentSlide === index || (currentSlide === extendedBanners.length - 1 && index === 0);
              
              return (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
