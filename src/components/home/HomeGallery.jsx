import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../common/SectionHeading";
import ImageModal from "../common/ImageModal";
import { siteData } from "../../data/siteData";
import aiGalleryImage from "../../assets/images/gallery_ai_1.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomeGallery = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  imagesRef.current = [];

  const displayImages = [
    aiGalleryImage, 
    siteData.gallery[2], // pic3
    siteData.gallery[10], // pic11
    siteData.gallery[12] // pic13
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imagesRef.current, 
        { scale: 0.8, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          clearProps: "transform,scale" // Ensures CSS hover scale works afterwards
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-6">
          <SectionHeading 
            subtitle="Showcase"
            title={<span className="font-script font-normal tracking-wide text-secondary">Our Latest <span className="text-primary">Collections</span></span>}
            className="mb-0 md:mb-0"
            centered={true}
          />
          <Link
            to="/gallery"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-auto md:h-[600px]">
          {displayImages.map((img, index) => {
            let gridClass = "";
            if (index === 0) gridClass = "col-span-2 md:col-span-2 md:row-span-2 rounded-[2rem]";
            else if (index === 1) gridClass = "col-span-2 md:col-span-2 md:row-span-1 rounded-[2rem]";
            else gridClass = "col-span-1 md:col-span-1 md:row-span-1 rounded-[1.5rem]";

            return (
              <div 
                key={index}
                ref={el => { if (el) imagesRef.current[index] = el; }}
                className={`relative group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${gridClass}`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Eyewear Collection ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-primary shadow-lg mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </span>
                    <h4 className="text-white font-bold text-xl md:text-2xl tracking-wide drop-shadow-md">
                      {index === 0 ? "Latest Arrivals" : index === 1 ? "Designer Frames" : index === 2 ? "Sunglasses" : "Premium Lenses"}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/gallery"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default HomeGallery;
