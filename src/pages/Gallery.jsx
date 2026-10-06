import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/common/PageHeader";
import ImageModal from "../components/common/ImageModal";
import { siteData } from "../data/siteData";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);
  const itemsRef = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent double-stagger during hot reload
  itemsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item, 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: (i % 3) * 0.1, // Stagger effect by row
            clearProps: "all"
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHeader 
        title={<span className="font-script text-white font-normal tracking-wide px-1">Our Gallery</span>}
        subtitle="Explore Our Collection"
        image={siteData.images.galleryHeader}
        layout="right"
      />
      
      <section ref={galleryRef} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.gallery.map((img, index) => (
              <div 
                key={index}
                ref={el => { if (el) itemsRef.current[index] = el; }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Optical Frame ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Gallery;
