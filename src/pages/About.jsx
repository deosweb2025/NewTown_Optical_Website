import { useEffect, useRef } from "react";
import PageHeader from "../components/common/PageHeader";
import HomeAbout from "../components/home/HomeAbout";
import { siteData } from "../data/siteData";
import { Target, Eye, ShieldCheck, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".stat-number");
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        
        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHeader 
        title={<span className="font-script text-white font-normal tracking-wide px-1">About Our Clinic</span>}
        subtitle="Our Story"
        image={siteData.images.about}
        layout="left"
      />
      
      {/* Hide the About Page link when displaying on the About page */}
      <HomeAbout hideLink={true} />
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-5xl font-bold text-primary mb-3">
                <span className="stat-number" data-target="10">0</span>+
              </h3>
              <p className="text-secondary font-medium text-lg">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-5xl font-bold text-primary mb-3">
                <span className="stat-number" data-target="5000">0</span>+
              </h3>
              <p className="text-secondary font-medium text-lg">Happy Customers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-5xl font-bold text-primary mb-3">
                <span className="stat-number" data-target="100">0</span>%
              </h3>
              <p className="text-secondary font-medium text-lg">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-normal tracking-wide text-secondary mb-6 heading-underline inline-block">
              Our Core <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We are driven by a simple belief: everyone deserves to see the world clearly and comfortably without compromising on personal style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="premium-card p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To provide comprehensive, state-of-the-art eye care services and premium optical products. We aim to empower our community with perfect vision, utilizing the latest technology and offering an unmatched selection of eyewear.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="premium-card p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sky-500 mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-sky-500 transition-colors">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To become the most trusted optical destination in Kolkata by consistently exceeding customer expectations in clinical excellence, product quality, and personalized customer care.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-16">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2">Uncompromising Quality</h4>
                <p className="text-slate-600">From our diagnostic equipment to our lenses and frames, we ensure the highest standards in every aspect of our service.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 flex-shrink-0 mt-1">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2">Compassionate Care</h4>
                <p className="text-slate-600">We treat every patient like family, taking the time to understand their unique visual needs and lifestyle requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
