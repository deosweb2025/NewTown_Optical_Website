import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "../../data/siteData";

gsap.registerPlugin(ScrollTrigger);

const HomeContact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 text-white relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${siteData.images.contactHeader})` }}
    >
      <div className="absolute inset-0 bg-[#050b14]/90 backdrop-blur-[2px] z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="contact-info">
            <h2 className="text-3xl md:text-5xl font-script font-normal tracking-wide mb-4 text-white heading-underline heading-underline-left">Get in Touch</h2>
            <p className="text-slate-400 mb-10 max-w-md text-lg">
              Have questions about our collections or need an eye test? We are here to help you see better.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-light" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-400 leading-relaxed max-w-sm">
                    {siteData.location.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary-light" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contact Number</h4>
                  <p className="text-slate-400">
                    <a href={`tel:${siteData.contact.phone}`} className="hover:text-primary-light transition-colors block">{siteData.contact.phone}</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-primary-light" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                  <p className="text-slate-400">
                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-primary-light transition-colors">{siteData.contact.email}</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-slate-900 px-8 py-3 rounded-full font-medium transition-colors"
              >
                View Full Contact Page
              </Link>
            </div>
          </div>
          
          <div className="contact-form bg-white text-secondary p-8 md:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
