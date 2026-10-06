import PageHeader from "../components/common/PageHeader";
import { siteData } from "../data/siteData";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <PageHeader 
        title={<span className="font-script text-white font-normal tracking-wide px-1">Contact Us</span>}
        subtitle="Get in Touch"
        image={siteData.images.contactHeader}
        layout="left"
      />
      
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-sky-300/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-normal tracking-wide text-secondary mb-6 heading-underline inline-block">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Whether you have a question about our eyewear collections, need an eye test, or require assistance with your prescription, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Call Us</h4>
                  <a href={`tel:${siteData.contact.phone}`} className="block text-slate-600 hover:text-primary transition-colors">{siteData.contact.phone}</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Email Us</h4>
                  <a href={`mailto:${siteData.contact.email}`} className="block text-slate-600 hover:text-primary transition-colors break-all">{siteData.contact.email}</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">Business Hours</h4>
                  <p className="text-slate-600">Mon - Sun: 10:30 AM - 9:00 PM</p>
                  <p className="text-slate-500 text-sm mt-1">Open all 7 days</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="premium-card bg-white p-10 rounded-[2rem] shadow-lg h-full">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-secondary mb-8">Send us a Message</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Subject</label>
                      <input 
                        type="text" 
                        placeholder="How can we help?" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Message</label>
                      <textarea 
                        rows="5" 
                        placeholder="Write your message here..." 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      ></textarea>
                    </div>
                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-primary/20">
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 bg-surface relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 p-4 md:p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Visit Our Store</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {siteData.location.address}
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Get Directions
              </a>
            </div>
            <div className="w-full md:w-2/3 h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-inner bg-slate-100">
              <iframe
                src={siteData.location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="w-full h-full grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
