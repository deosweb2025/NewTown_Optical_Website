import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import footerTexture from "../../assets/images/footer_texture.jpg";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="relative bg-[#050b14] text-slate-300 pt-20 pb-8 overflow-hidden border-t border-white/5">
      {/* Premium Texture & Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0"></div>
      
      {/* Marble Texture Image */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url(${footerTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/80 to-[#050b14]/40 z-0"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo dark />
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteData.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm hover:text-white transition-colors w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <p>{siteData.location.address}</p>
              <a href={`tel:${siteData.contact.phone}`} className="hover:text-white transition-colors">
                Phone: {siteData.contact.phone}
              </a>
              <a href={`mailto:${siteData.contact.email}`} className="hover:text-white transition-colors break-all">
                Email: {siteData.contact.email}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Find Us</h4>
            <div className="w-full h-32 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src={siteData.location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col justify-center items-center gap-2 text-sm text-slate-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} {siteData.company.name}. All rights reserved.
          </p>
          <p className="flex items-center text-center">
            Designed & Developed by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 text-slate-400"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
